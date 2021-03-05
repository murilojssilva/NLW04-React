import { createContext, ReactNode, useEffect, useState } from "react";

interface DarkModeProviderProps {
	children: ReactNode;
}

interface DarkModeContextData {
	isDarkMode: boolean;
	changeTheme: () => void;
}

export const DarkModeContext = createContext({} as DarkModeContextData);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	function changeTheme() {
		if (isDarkMode) {
			setIsDarkMode(false);
		} else {
			setIsDarkMode(true);
		}
	}

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.remove('backgroundDark');
		} else {
			document.body.classList.add('backgroundDark');
		}
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider value={{
			isDarkMode,
			changeTheme,
		}}>
			{ children}
		</DarkModeContext.Provider>
	);
}