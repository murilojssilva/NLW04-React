import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from '../styles/components/DarkModeButton.module.css';
import stylesDark from '../styles/components/DarkModeButton.dark.module.css';

export function DarkModeButton() {
	const { isDarkMode, changeTheme } = useContext(DarkModeContext)

	return (
		<div className={isDarkMode ? styles.container : stylesDark.containerDark}>
			<button onClick={changeTheme}>{isDarkMode ? 'Dark mode 🔅' : 'Light mode 🔆'}</button>
		</div>
	)
}