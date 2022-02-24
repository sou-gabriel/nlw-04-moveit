import { useEffect, useState, useContext } from 'react'

import {
  ChallengesContext,
  ChallengesProvider,
} from '../contexts/ChallengesContent'

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60) // 25 minutes in seconds
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setIsCountdownActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsCountdownActive(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)

      return () => clearTimeout(countdownTimeout)
    }

    if (isCountdownActive && time === 0) {
      setHasFinished(true)
      setIsCountdownActive(false)
      startNewChallenge()
    }
  }, [isCountdownActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : isCountdownActive ? (
        <button
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button className={styles.countdownButton} onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      )}
    </div>
  )
}
