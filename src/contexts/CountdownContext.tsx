import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

import { ChallengesContext } from './ChallengesContent'

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isCountdownActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownContextData {}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext<CountdownContextData>(
  {} as CountdownContextData
)

let countdownTimeout: NodeJS.Timeout

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60) // 25 minutes in seconds
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => {
    setIsCountdownActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsCountdownActive(false)
    setTime(25 * 60)
    setHasFinished(false)
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
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isCountdownActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
