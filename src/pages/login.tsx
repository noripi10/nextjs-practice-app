import styles from '../styles/login.module.css'
import Head from 'next/head'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState, ChangeEvent } from 'react'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

const Login = () => {
  const { loginUser, onSignInMailPassword, onSignUpMailPassword, onSignInWithGoogle, signOut } = useFirebaseAuth()
  const [mailAddress, setMailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)

  const onChangeMailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setMailAddress(event.target.value)
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onSignIn = async () => {
    const result = await onSignInMailPassword(mailAddress, password)
    if (!result) {
      alert('失敗しました')
    }
  }

  const onSignUp = async () => {
    const result = await onSignUpMailPassword(mailAddress, password)
    if (!result) {
      alert('失敗しました')
    }
  }

  return (
    <>
      <Head>
        <title>practice1</title>
      </Head>
      <header className={styles.header}>
        <div>ログイン</div>
      </header>
      <Flex display='flex' justify='center' align='center' height='xl'>
        {!!!loginUser ? (
          <Box
            w='md'
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
              <Text fontSize={{ base: 'md', md: 'lg' }}>ユーザー登録</Text>
            </Heading>
            <Divider my={6} />
            <Stack px={6} pt={6} justify='center' align='center'>
              <Input
                focusBorderColor='blue.400'
                placeholder='メールアドレス'
                size='sm'
                value={mailAddress}
                onChange={onChangeMailAddress}
              />
              <InputGroup>
                <Input
                  focusBorderColor='blue.400'
                  placeholder='パスワード'
                  size='sm'
                  value={password}
                  onChange={onChangePassword}
                  type={displayPassword ? '' : 'password'}
                />
                <InputRightElement onClick={() => setDisplayPassword((prev) => !prev)}>
                  {displayPassword ? <FaEyeSlash /> : <FaEye />}
                </InputRightElement>
              </InputGroup>
              <Button w='sm' bg='rgb(47, 126, 163)' color='white' onClick={onSignUp}>
                サインアップ
              </Button>
              <Button w='sm' bg='rgb(47, 126, 163)' color='white' onClick={onSignIn}>
                サインイン
              </Button>
            </Stack>
            <Stack py={3}>
              <Text>or</Text>
            </Stack>
            <Button w='sm' bg={'rgb(47, 126, 163)'} color='white' leftIcon={<FaGoogle />} onClick={onSignInWithGoogle}>
              Googleサインイン
            </Button>
          </Box>
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
