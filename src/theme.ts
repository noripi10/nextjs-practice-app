import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme(themeConfig)

export default theme
