import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "../styles/components/Countdown.module.css";
import stylesDark from "../styles/components/Countdown.dark.module.css"


export function Countdown() {
	const { minutes,
		seconds,
		hasFinished,
		isActive,
		startCountdown,
		resetCountdown
	} = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
	const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

	const { isDarkMode } = useContext(DarkModeContext)
	return (
		<div>
			<div className={isDarkMode ? styles.countdownContainer : stylesDark.countdownContainerDark}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>
			{ hasFinished ?
				(
					<button disabled className={styles.countdownButton}>
						Ciclo encerrado <FontAwesomeIcon icon={faCheckCircle} />
					</button>
				) :
				(
					<>
						{
							isActive ?
								(<button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
									Abandonar ciclo

								</button>
								) :
								(<button onClick={startCountdown} type="button" className={styles.countdownButton}>
									Iniciar um ciclo
								</button>)
						}
					</>
				)

			}

		</div >
	)
}