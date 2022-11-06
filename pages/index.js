import Head from 'next/head'
import Image from 'next/image'
import Main from'../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandon Wu</title>
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
