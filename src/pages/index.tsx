import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { HStack, Wrap, Button, Text, useColorMode } from '@chakra-ui/react'
import { useLogin } from '../provider/AuthProvider'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <HStack>
          <Button
            bgColor='green.700'
            color='white'
            p='6'
            onClick={() => {
              router.push('/login')
            }}
          >
            login　→
          </Button>
          <Button
            bgColor='purple.700'
            color='white'
            p='6'
            onClick={() => {
              router.push('/login_nativebase')
            }}
          >
            login(NativeBase)　→
          </Button>

          <Button bgColor='messenger.900' color='white' p='6' onClick={() => router.push('/glitch')}>
            glitch →
          </Button>
          <Button
            bgColor='twitter.400'
            color='white'
            p='6'
            onClick={() => {
              toggleColorMode()
            }}
          >
            change theme
          </Button>
        </HStack>
        <HStack>
          <Button
            bgColor='orange.400'
            color='white'
            p='6'
            onClick={() => {
              router.push('/practice_collapse')
            }}
          >
            practice_collapse →
          </Button>
          <Button
            bgColor='teal.400'
            color='white'
            p='6'
            onClick={() => {
              router.push('/practice_notion')
            }}
          >
            practice_notion →
          </Button>
          <Button
            bgColor='blue.400'
            color='white'
            p='6'
            onClick={() => {
              router.push('/practice_twitter')
            }}
          >
            practice_twitter →
          </Button>
        </HStack>
        <Wrap>
          <Text>{process.env.customKey}</Text>
        </Wrap>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src='./vercel.svg' alt='Vercel Logo' width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   // return {
//   //   redirect: {
//   //     permanent: false,
//   //     destination: '/login',
//   //   },
//   // }
//   return {
//     props: {},
//   }
// }
