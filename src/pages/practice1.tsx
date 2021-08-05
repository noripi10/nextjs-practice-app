import { useState } from 'react'
import Head from 'next/head'
import {
  Box,
  Image as ChakraImage,
  Text,
  Link as ChakraLink,
  HStack,
  Stack,
  IconButton,
  useColorMode,
  ColorMode,
  SkeletonCircle,
  Skeleton,
  SkeletonText,
  VStack,
} from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import styles from '../styles/practice1.module.css'
import { useScroll } from '../hooks/useScroll'

const Practice1 = () => {
  const { colorMode, setColorMode } = useColorMode()
  const [selectImage, setSelectImage] = useState(images[0])
  const { displayScrollReset, onScrollTop } = useScroll()

  const onChangeColorMode = () => {
    setColorMode((prevColorMode: ColorMode) => (prevColorMode === 'dark' ? 'light' : 'dark'))
  }
  return (
    <>
      <Head>
        <title>practice1</title>
      </Head>
      {/* <header className={styles.header}>
        <div>Practice1</div>
      </header> */}
      <HStack
        width='100%'
        h={{ base: '80px', md: '100px' }}
        p={4}
        color='white'
        fontWeight='bold'
        bgGradient='linear(to-br, teal.400, teal.200 )'
      >
        <Stack flexGrow={1}>
          <Text>Practice1</Text>
        </Stack>
        <IconButton
          aria-label='mode-change'
          icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
          color='darkgray'
          bg='transparent'
          fontSize={28}
          onClick={onChangeColorMode}
        />
      </HStack>
      <HStack
        position='fixed'
        top={displayScrollReset ? 0 : -80}
        p={4}
        boxShadow='md'
        width='100%'
        height={{ md: '80px' }}
        bgGradient='linear(to-br, blue.200, red.200)'
        zIndex={100}
      >
        <Stack flexGrow={1}>
          <Text>Practice1</Text>
        </Stack>
        <IconButton
          aria-label='mode-change'
          icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
          color='darkgray'
          bg='transparent'
          fontSize={28}
          onClick={onChangeColorMode}
        />
      </HStack>

      <HStack m='3' justify='flex-start' align='flex-start'>
        <Box>
          <div className={styles.nav}>
            {images.map((image, index) => (
              <Box
                as='a'
                key={image.url + index.toString()}
                onClick={() => {
                  onScrollTop()
                  setSelectImage(image)
                }}
                _hover={{ cursor: 'pointer' }}
                background={colorMode === 'dark' ? 'gray.600' : 'white'}
                m='1'
                p={{ base: '2', md: '3' }}
                w={{ base: '150px', md: '300px' }}
                h={{ base: '50px', md: '80px' }}
                borderRadius='8'
                boxShadow='3'
                justifyContent='center'
                alignItems='center'
              >
                <HStack justifyContent='flex-start' alignItems='center'>
                  <ChakraImage
                    borderRadius='full'
                    boxSize={{ base: '30px', md: '60px' }}
                    src={image.url}
                    alt={`${image.description}`}
                  />
                  <Text fontSize={{ base: '11px', md: '16px' }}>{image.description}</Text>
                </HStack>
              </Box>
            ))}
          </div>
        </Box>
        <div>
          <Box
            p={4}
            m={2}
            display={{ md: 'flex' }}
            background={colorMode === 'dark' ? 'gray.600' : 'white'}
            boxShadow='md'
            borderRadius='4'
          >
            <Box flexShrink={0}>
              <ChakraImage
                borderRadius='lg'
                width={{ md: 40 }}
                height={{ md: 40 }}
                src={selectImage.url}
                alt={selectImage.description}
                objectFit='cover'
              />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Text fontWeight='bold' textTransform='uppercase' fontSize='sm' letterSpacing='wide' color='teal.600'>
                Marketing
              </Text>
              <ChakraLink mt={1} display='block' fontSize='lg' lineHeight='normal' fontWeight='semibold' href='#'>
                Finding customers for your new business
              </ChakraLink>
              <Text mt={2} color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}>
                Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find
                your first customers.
              </Text>
            </Box>
          </Box>
          <Box p={6} m={2} borderRadius='4' boxShadow='lg' mt='1'>
            <HStack justify='flex-start' align='flex-start'>
              <SkeletonCircle size='20' mb='4' />
              <VStack w='80%' justify='flex-start' align='flex-start' pl='2'>
                <SkeletonText noOfLines={5} w='100%' />
              </VStack>
            </HStack>
            <SkeletonText noOfLines={4} />
          </Box>
        </div>
      </HStack>
      {displayScrollReset && (
        <div className={styles.top_scroll_container}>
          <div onClick={onScrollTop}>
            <div className={styles.top_scroll_item}>top↑</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Practice1

const images = [
  {
    url: 'https://source.unsplash.com/Gi3iUJ1FwxI',
    description: 'Gi3iUJ1FwxI',
  },
  {
    url: 'https://source.unsplash.com/e23kLgJrxG0',
    description: 'e23kLgJrxG0',
  },
  {
    url: 'https://source.unsplash.com/bwsdlG5WLPM',
    description: 'bwsdlG5WLPM',
  },
  {
    url: 'https://source.unsplash.com/RX4PbI6ij9U',
    description: 'RX4PbI6ij9U',
  },
  {
    url: 'https://source.unsplash.com/1UI_jN_e9kw',
    description: '1UI_jN_e9kw',
  },
  {
    url: 'https://source.unsplash.com/MqQOZT2-YCw',
    description: 'MqQOZT2-YCw',
  },
  {
    url: 'https://source.unsplash.com/Gi3iUJ1FwxI',
    description: 'Gi3iUJ1FwxI',
  },
  {
    url: 'https://source.unsplash.com/e23kLgJrxG0',
    description: 'e23kLgJrxG0',
  },
  {
    url: 'https://source.unsplash.com/bwsdlG5WLPM',
    description: 'bwsdlG5WLPM',
  },
  {
    url: 'https://source.unsplash.com/RX4PbI6ij9U',
    description: 'RX4PbI6ij9U',
  },
  {
    url: 'https://source.unsplash.com/1UI_jN_e9kw',
    description: '1UI_jN_e9kw',
  },
  {
    url: 'https://source.unsplash.com/MqQOZT2-YCw',
    description: 'MqQOZT2-YCw',
  },
  {
    url: 'https://source.unsplash.com/MqQOZT2-YCw',
    description: 'MqQOZT2-YCw',
  },
  {
    url: 'https://source.unsplash.com/Gi3iUJ1FwxI',
    description: 'Gi3iUJ1FwxI',
  },
  {
    url: 'https://source.unsplash.com/e23kLgJrxG0',
    description: 'e23kLgJrxG0',
  },
  {
    url: 'https://source.unsplash.com/bwsdlG5WLPM',
    description: 'bwsdlG5WLPM',
  },
  {
    url: 'https://source.unsplash.com/RX4PbI6ij9U',
    description: 'RX4PbI6ij9U',
  },
  {
    url: 'https://source.unsplash.com/1UI_jN_e9kw',
    description: '1UI_jN_e9kw',
  },
  {
    url: 'https://source.unsplash.com/MqQOZT2-YCw',
    description: 'MqQOZT2-YCw',
  },
]
