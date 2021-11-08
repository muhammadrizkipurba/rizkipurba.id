import NextNProgress from 'nextjs-progressbar'
import '../public/assets/css/custom.css'
import '../public/assets/css/style.css'


function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <NextNProgress height={4} color="#39b5eb" /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
