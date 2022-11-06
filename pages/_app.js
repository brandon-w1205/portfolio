import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      
      {/* aside... */}
      <Component {...pageProps} />
      {/* footer */}
    </>
  )
}

export default MyApp
