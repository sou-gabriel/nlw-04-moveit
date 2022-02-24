import { useEffect, useState } from 'react'

import styles from '../styles/components/Countdown.module.css'

export const Countdown = () => {
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isCountdownActive, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setActive(true)
  }

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      const timerId = setTimeout(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)

      return () => clearTimeout(timerId)
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
      <button className={styles.countdownButton} onClick={startCountdown}>
        Iniciar um ciclo
      </button>
    </div>
  )
}
