import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  return (
    <div className='h-screen'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
