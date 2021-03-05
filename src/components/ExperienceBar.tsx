import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "../styles/components/ExperienceBar.module.css";
import stylesDark from "../styles/components/ExperienceBar.dark.module.css"

export function ExperienceBar() {
	const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

	const { isDarkMode } = useContext(DarkModeContext)

	return (
		<header className={isDarkMode ? styles.experienceBar : stylesDark.experienceBarDark}>
			<span>0 xp</span>
			<div>
				<div style={{ width: `${percentToNextLevel}%` }} />
				<span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
			</div>
			<span>{experienceToNextLevel} xp</span>
		</header>
	);
}