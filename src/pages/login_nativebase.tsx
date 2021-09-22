import React, { useCallback, useContext, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Flex, Button, Box, Text, Input, InputGroup, Heading, Divider, Image } from '@chakra-ui/react'
// import { Button, Box, Text, Input, InputGroup, Heading, Divider, Image } from 'native-base'
import { useForm } from 'react-hook-form'
import { useFileUpload } from 'use-file-upload'
import { FaGoogle } from 'react-icons/fa'

import { AuthContextProps, AuthContext } from '../provider/AuthProvider'

type FormData = {
  user: string
  pass: string
}

export default function LoginNativeBase() {
  const router = useRouter()
  const { loginUser, onSignInWithGoogle, onSignInMailPassword } = useContext<AuthContextProps>(AuthContext)

  const onSubmitForm = useCallback(
    (data: FormData) => {
      onSignInMailPassword(data.user, data.pass)
    },
    [onSignInMailPassword]
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  useEffect(() => {
    if (loginUser?.uid != null) {
      router.replace('/practice1')
    }
  }, [loginUser, router])

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex
        display='flex'
        justifyContent='center'
        alignItems='center'
        h='100vh'
        bgGradient='linear(to-b, green.200, blue.400)'
        flexDirection='column'
      >
        <Box
          w='40%'
          minWidth={350}
          maxWidth={600}
          bgColor='#4b66b9'
          display='flex'
          flexDirection='column'
          p='6'
          py='10'
          borderRadius='6'
          m='8'
        >
          <Heading as='h1' color='white'>
            Login
          </Heading>
          <Divider my='5' />

          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Flex flexGrow={1} flexDirection='column'>
              <InputGroup flexDirection='column' py='1'>
                <Text color='white'>User Name</Text>
                <Input color='white' {...register('user', { required: 'ユーザー名は必須入力です' })} />
                {errors.user && (
                  <Text fontSize='16' color='red.400'>
                    {errors.user?.message}
                  </Text>
                )}
              </InputGroup>

              <InputGroup flexDirection='column' py='1'>
                <Text color='white'>Password</Text>
                <Input color='white' type='password' {...register('pass', { required: 'パスワードは必須入力です' })} />
                {errors.pass && (
                  <Text fontSize='16' color='red.400'>
                    {errors.pass?.message}
                  </Text>
                )}
              </InputGroup>
            </Flex>

            <Button my='2' type='submit' w='100%'>
              Login
            </Button>
          </form>

          <Divider my='2' />
          <Button my='2' leftIcon={<FaGoogle />} onClick={onSignInWithGoogle}>
            Googleでログインする
          </Button>
        </Box>

        {/* <Box>
          <Input type='file' accept='image/*' capture='enviroment' />
          <Button
            onClick={() => {
              selectFile({ accept: 'image/*', multiple: false }, (file) => console.info(file))
            }}
          >
            select file
          </Button>
          {file && <Image src={file.source} alt='select image' boxSize='200px' boxShadow='md' />}
        </Box> */}
      </Flex>
    </>
  )
}
