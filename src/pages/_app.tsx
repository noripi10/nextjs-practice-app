import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { NativeBaseProvider } from 'native-base'

import { AuthProvider } from '../provider/AuthProvider'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NativeBaseProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </NativeBaseProvider>
    </ChakraProvider>
  )
}
export default MyApp
