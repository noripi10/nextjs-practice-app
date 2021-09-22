import { useState, useEffect, useCallback, createContext, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../libs/firebase'
import { useContext } from 'react'
import { Dispatch } from 'react'

import firebase from 'firebase'

export type AuthContextProps = {
  loginUser: firebase.UserInfo | null
  setLoginUser: Dispatch<SetStateAction<firebase.User | null>>
  onSignUpMailPassword: (mail: string, password: string) => Promise<boolean>
  onSignInMailPassword: (mail: string, password: string) => Promise<boolean>
  onSignInWithGoogle: () => Promise<boolean>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

type Props = {
  children: React.ReactNode
}

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const router = useRouter()
  const [loginUser, setLoginUser] = useState<firebase.User | null>(null)

  const onSignUpMailPassword = useCallback(async (mail: string, password: string): Promise<boolean> => {
    try {
      // console.log(mail, password)
      await auth.createUserWithEmailAndPassword(mail, password)
      return true
    } catch (error) {
      console.warn(error)
      return false
    }
  }, [])

  const onSignInMailPassword = useCallback(async (mail: string, password: string): Promise<boolean> => {
    try {
      // console.log(mail, password)
      await auth.signInWithEmailAndPassword(mail, password)
      return true
    } catch (error) {
      console.warn(error)
      return false
    }
  }, [])

  const onSignInWithGoogle = useCallback(async (): Promise<boolean> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await auth.signInWithPopup(provider)

      return true
    } catch (error) {
      console.warn(error)
      return false
    }
  }, [])

  // ログアウトしたら強制遷移
  const signOut = useCallback(() => {
    auth.signOut().then(() => router.replace('/login'))
  }, [router])

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoginUser(user)
      } else {
        setLoginUser(null)
      }
    })
    return () => {
      subscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ loginUser, setLoginUser, onSignUpMailPassword, onSignInMailPassword, onSignInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useLogin = () => useContext<AuthContextProps>(AuthContext).loginUser !== null
