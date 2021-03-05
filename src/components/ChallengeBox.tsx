import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "../styles/components/ChallengeBox.module.css"
import stylesDark from "../styles/components/ChallengeBox.dark.module.css"

export function ChallengeBox() {
	const { activeChallenge, resetChallenges, completeChallenges } = useContext(ChallengesContext);
	const { resetCountdown } = useContext(CountdownContext)
	const { isDarkMode } = useContext(DarkModeContext)
	function handleChallengeSucceded() {
		completeChallenges()
		resetCountdown()
	}
	function handleChallengeFailed() {
		resetChallenges()
		resetCountdown()
	}

	return (
		<div className={isDarkMode ? styles.challengeBoxContainer : stylesDark.challengeBoxContainerDark}>

			{activeChallenge ?
				<div className={styles.challengeActive}>
					<header>Ganhe {activeChallenge.amount} xp</header>
					<main>
						<img src={`icons/${activeChallenge.type}.svg`} />
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>
					<footer>
						<button type="button" onClick={handleChallengeFailed} className={styles.challengeFailButton}>Falhei</button>
						<button type="button" onClick={handleChallengeSucceded} className={styles.challengeSuccededButton}>Completei</button>
					</footer>

				</div>
				: (<div className={styles.challengeNotActive}>
					<strong>Finalize um ciclo para receber um novo desafio.</strong>
					<p>
						<img src="icons/level-up.svg" alt="Level Up" />
						Avance de level completando desafios.
					</p>

				</div>)

			}
		</div>)
}