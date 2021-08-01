import { useState } from 'react'
import Head from 'next/head'
import { Box, Image as ChakraImage, Text, Link as ChakraLink, HStack } from '@chakra-ui/react'
import styles from '../styles/practice1.module.css'
import { useScroll } from '../hooks/useScroll'

const Practice1 = () => {
  const [selectImage, setSelectImage] = useState(images[0])
  const { displayScrollReset, onScrollTop } = useScroll()

  return (
    <>
      <Head>
        <title>practice1</title>
      </Head>
      <header className={styles.header}>
        <div>Practice1</div>
      </header>
      <main className={styles.main}>
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
              >
                <HStack className={styles.nav_item} width={{ base: '150px', md: '300px' }}>
                  <ChakraImage
                    borderRadius='full'
                    boxSize={{ base: '30px', md: '60px' }}
                    src={image.url}
                    alt={`${image.description}`}
                  />
                  <div className={styles.nax_item_description}>{image.description}</div>
                </HStack>
              </Box>
            ))}
          </div>
        </Box>
        <div>
          <Box p={4} display={{ md: 'flex' }}>
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
              <Text mt={2} color='gray.500'>
                Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find
                your first customers.
              </Text>
            </Box>
          </Box>
        </div>
      </main>
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
