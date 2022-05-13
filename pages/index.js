import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counterbox from './box/counterbox'


export default function Home() {
  return (
    <div className={ styles.center }>
      <div className={styles.container}>
      <Counterbox />
    </div>
    </div>
  )
}
