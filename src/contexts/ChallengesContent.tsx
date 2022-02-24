import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface ActiveChallenge {
  type: string
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  experienceToNextLevel: number
  challengesCompleted: number
  activeChallenge: ActiveChallenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData
)

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengedCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] =
    useState<ActiveChallenge | null>(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(prevLevel => prevLevel + 1)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.round(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
