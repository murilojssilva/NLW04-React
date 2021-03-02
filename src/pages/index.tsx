import Head from "next/head";

import { GetServerSideProps } from "next"

import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import styles from "../styles/pages/Home.module.css"

interface HomeProps {
  level: number,
  challengesCompleted: number,
  currentExperience: number
}

export default function Home(props) {
  return (
    <ChallengesProvider level={props.level} challengesCompleted={props.challengesCompleted} currentExperience={props.currentExperience}>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div >
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, challengesCompleted, currentExperience } = req.cookies;
  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience)
    }
  }
}