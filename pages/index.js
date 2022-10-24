import Head from 'next/head'
import Image from 'next/image'
import Main from'../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandon Wu</title>
      </Head>
      {/* <NavBar /> */}
      <Main />
    </div>
  )
}
