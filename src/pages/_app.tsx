import { AppProps } from 'next/app'

import { ChallengesProvider } from '../contexts/ChallengesContent'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
