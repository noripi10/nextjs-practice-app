import { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { FaGoogle, FaEye, FaEyeSlash, FaSun, FaMoon } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthContext, AuthContextProps, useLogin } from '../provider/AuthProvider'
import styles from '../styles/login.module.css'

type FormInputType = {
  mail: string
  password: string
}

const Login = () => {
  const router = useRouter()
  // 認証系（プロバイダ情報）
  const { loginUser, onSignInMailPassword, onSignInWithGoogle, signOut } = useContext<AuthContextProps>(AuthContext)
  const isLogin = useLogin()

  // ダークモード
  const { colorMode, toggleColorMode } = useColorMode()

  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputType>()

  const [displayPassword, setDisplayPassword] = useState(false)

  const onSignIn: SubmitHandler<FormInputType> = async ({ mail, password }) => {
    const result = await onSignInMailPassword(mail, password)
    if (!result) {
      alert('失敗しました')
    }
  }

  // loginしたら遷移
  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        router.push('/practice1')
      }, 1000)
    }
  }, [isLogin, router])

  return (
    <>
      <Head>
        <title>Next.js Practice App</title>
      </Head>
      <header className={styles.header}>
        <Text flexGrow={1} color='white' fontWeight='bold'>
          ログイン
        </Text>
        <Button bg='transparent' color='white' border='none' onClick={toggleColorMode}>
          {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
      </header>

      <Flex justify='center' align='center' height='1000px'>
        {!!!loginUser ? (
          <>
            <Box
              w={{ base: 'sm', md: 'md' }}
              shadow='md'
              justify='center'
              align='center'
              flexDirection='column'
              borderRadius='8px'
              borderColor='#ddd'
              borderWidth={1}
              p={2}
              pb={8}
            >
              <Heading as='h1' size='lg' textAlign='center' pt={2}>
                <Text fontSize={{ base: 'md', md: 'lg' }}>Login Form</Text>
              </Heading>

              <Divider my={6} />

              <form onSubmit={handleSubmit(onSignIn)}>
                <Stack px={2} pt={6} justify='center' align='center'>
                  <InputGroup justifyContent='flex-start' flexDirection='column' alignItems='flex-start'>
                    <Input
                      focusBorderColor='blue.400'
                      placeholder='メールアドレス'
                      size='sm'
                      // value={mailAddress}
                      // onChange={onChangeMailAddress}
                      {...register('mail', { required: '必須入力です' })}
                    />
                    {errors.password && (
                      <Text color='red.700' fontSize={12} pl={2}>
                        {errors.mail?.message}
                      </Text>
                    )}
                  </InputGroup>
                  <InputGroup pb={4} flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
                    <Input
                      focusBorderColor='blue.400'
                      placeholder='パスワード'
                      size='sm'
                      type={displayPassword ? '' : 'password'}
                      justifyContent='center'
                      // value={password}
                      // onChange={onChangePassword}
                      {...register('password', {
                        required: '必須入力です',
                        minLength: { value: 5, message: 'パスワードは５文字以上入力くしてください' },
                      })}
                    />
                    <InputRightElement onClick={() => setDisplayPassword((prev) => !prev)}>
                      {displayPassword ? <FaEyeSlash /> : <FaEye />}
                    </InputRightElement>
                    {errors.password && (
                      <Text color='red.700' fontSize={12} pl={2}>
                        {errors.password?.message}
                      </Text>
                    )}
                  </InputGroup>
                  <Button w='90%' bg='rgb(0, 92, 131)' color='white' type='submit'>
                    メールアドレスを入力してログイン
                  </Button>
                  <Button w='90%' bg='rgb(102, 150, 172)' color='white' onClick={() => router.push('./register')}>
                    ユーザー登録
                  </Button>
                </Stack>
              </form>

              <Stack py={3}>
                <Text>または</Text>
              </Stack>

              <Stack align='center' px={2}>
                <Button w='90%' bg='rgb(0, 92, 131)' color='white' leftIcon={<FaGoogle />} onClick={onSignInWithGoogle}>
                  Googleサインイン
                </Button>
              </Stack>
            </Box>
          </>
        ) : (
          <Box
            w='lg'
            shadow='md'
            justify='center'
            align='center'
            flexDirection='column'
            borderRadius='8px'
            borderColor='#ddd'
            borderWidth={1}
            p={8}
          >
            <Text bgGradient='linear(to-l,#7928CA, #ff0080)' bgClip='text' fontSize='2xl' fontWeight='bold'>
              {loginUser.email}
            </Text>
            <Button w='sm' bg='rgb(47, 126, 163)' color='white' onClick={signOut}>
              サインアウト
            </Button>
          </Box>
        )}
      </Flex>
    </>
  )
}

export default Login
