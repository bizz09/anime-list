
import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata = {
  title: 'Zuinime',
  description: 'Anime top',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary ${poppins.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
