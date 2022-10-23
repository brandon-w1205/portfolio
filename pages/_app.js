import '../styles/globals.css'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      {/* header */}
      <NavBar />
      {/* aside... */}
      <Component {...pageProps} />
      {/* footer */}
    </ThemeProvider>
  )
}

export default MyApp
