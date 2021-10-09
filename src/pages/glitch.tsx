import { ButtonGroup, Button } from '@chakra-ui/react'
import { Box, Center, Flex, Stack, VStack, Wrap } from '@chakra-ui/layout'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { FileUpload, useFileUpload } from 'use-file-upload'
import { useState } from 'react'

export default function Glitch() {
  const router = useRouter()
  const [, selectFiles] = useFileUpload()
  const [backImage, setBackImage] = useState('https://source.unsplash.com/E0AHdsENmDg')

  return (
    <>
      <Head>
        <title>グリッチサンプル</title>
      </Head>
      <div className='glitch' style={{ backgroundImage: `url(${backImage})` }}>
        <div className='channel r'></div>
        <div className='channel g'></div>
        <div className='channel b'></div>
      </div>
      <Box position='absolute' top='5%' right='5%'>
        <ButtonGroup>
          <Button
            colorScheme='linkedin'
            onClick={() => {
              selectFiles({ accept: 'images/*', multiple: false }, (file: any) => {
                setBackImage(file.source)
              })
            }}
          >
            file select
          </Button>
          <Button colorScheme='messenger' onClick={() => router.push('/')}>
            home
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}
