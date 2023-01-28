 
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
 
 


export default function App({ Component, pageProps }) {
  return (
   
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
       
  )
}
 
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'
// import { store } from '../redux/store'

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
 
