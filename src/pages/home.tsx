import { useContext } from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from "../styles/pages/Home.module.css";
import { DarkModeProvider, DarkModeContext } from "../contexts/DarkModeContext";

interface HomeProps {
  level: number;
  currentExperience: number
  challengesCompleted: number;
}




export default function Home(props: HomeProps) {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <ChallengesProvider level={props.level} challengesCompleted={props.challengesCompleted} currentExperience={props.currentExperience}>
      <DarkModeProvider>
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
      </DarkModeProvider>
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