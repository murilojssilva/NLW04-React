import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "../styles/components/Profile.module.css";
import { DarkModeButton } from './DarkModeButton';
import stylesDark from "../styles/components/Profile.dark.module.css"

export function Profile() {
	const { level } = useContext(ChallengesContext)
	const { isDarkMode } = useContext(DarkModeContext)
	return (
		<div className={isDarkMode ? styles.profileContainer : stylesDark.profileContainerDark}>
			<img src="https://github.com/murilojssilva.png" alt="Murilo de Jesus" />
			<div>
				<strong>Murilo de Jesus</strong>
				<p>
					{" "}
					<img src="icons/level.svg" alt="Level" />Level {level}
					<DarkModeButton />
				</p>
			</div>
		</div>
	)
}