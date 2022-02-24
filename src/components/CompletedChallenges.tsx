import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContent'
import styles from '../styles/components/CompletedChallenges.module.css'

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
