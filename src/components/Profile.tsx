import styles from '../styles/components/Profile.module.css'

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego3g.png" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="/icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
