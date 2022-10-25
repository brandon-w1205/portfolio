import Head from 'next/head'
import Image from 'next/image'
import Main from'../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandon Wu</title>
      </Head>
      <Main />
      <About />
      <Skills />
    </div>
  )
}
