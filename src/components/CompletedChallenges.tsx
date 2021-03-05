import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "../styles/components/CompletedChallenges.module.css";
import stylesDark from "../styles/components/CompletedChallenges.dark.module.css"


export function CompletedChallenges() {
	const { isDarkMode } = useContext(DarkModeContext)
	const { challengesCompleted } = useContext(ChallengesContext)
	return (
		<div className={isDarkMode ? styles.completedChallengesContainer : stylesDark.completedChallengesContainerDark}>
			<span>Desafios completos:</span>
			<span>{challengesCompleted}</span>
		</div>
	)
}