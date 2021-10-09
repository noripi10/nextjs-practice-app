const path = require('path')

const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'native-base',
  'react-native-svg',
  'styled-components',
  'react-native-safe-area-context',
  '@react-aria/visually-hidden',
  '@react-native-aria/button',
  '@react-native-aria/checkbox',
  '@react-native-aria/combobox',
  '@react-native-aria/focus',
  '@react-native-aria/interactions',
  '@react-native-aria/listbox',
  '@react-native-aria/overlays',
  '@react-native-aria/radio',
  '@react-native-aria/slider',
  '@react-native-aria/tabs',
  '@react-native-aria/utils',
  '@react-stately/combobox',
  '@react-stately/radio',
])

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     loader: 'imgix', // next exportする時にとりあえずエラー回避
//     domains: ['source.unsplash.com'],
//   },
// }

module.exports = withPlugins(
  [
    withTM,
    // your plugins go here.
  ],
  {
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      }
      config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions]
      return config
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
    },
    images: {
      deviceSizes: [340, 640, 768, 1024, 1280, 1440, 1980],
      domains: ['source.unsplash.com'],
    },
  }
)
