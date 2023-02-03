import '@/styles/globals.css'
import dynamic from 'next/dynamic'


//const Carousel = dynamic(() => import('./components/UserDetails'))

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
