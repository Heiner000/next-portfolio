import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-zinc-200'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
