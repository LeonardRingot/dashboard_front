import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Body from '../components/Body'
import {
  MdOutlineCatchingPokemon
} from "react-icons/md";
export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>CSE Dashboard</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{textAlign:'center'}}> <Header></Header></div>
      
      
    </div>
    <div className={styles.mybody}>
    <div>  <Body>

    </Body>
    </div>
    </div>
    </>
  )
}
