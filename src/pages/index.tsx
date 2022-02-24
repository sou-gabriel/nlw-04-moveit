import Head from 'next/head'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import styles from '../styles/pages/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div></div>
        </section>
      </div>
    </>
  )
}

export default Home
