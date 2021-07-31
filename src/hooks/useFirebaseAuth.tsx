import { useState, useEffect, useCallback } from 'react'
import firebase from 'firebase'
import { auth } from '../libs/firebase'

export const useFirebaseAuth = () => {
  const [loginUser, setLoginUser] = useState<firebase.User | null>(null)

  const onSignUpMailPassword = useCallback(async (mail: string, password: string): Promise<boolean> => {
    try {
      console.log(mail, password)
      await auth.createUserWithEmailAndPassword(mail, password)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }, [])

  const onSignInMailPassword = useCallback(async (mail: string, password: string): Promise<boolean> => {
    try {
      console.log(mail, password)
      await auth.signInWithEmailAndPassword(mail, password)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }, [])

  const onSignInWithGoogle = useCallback(async (): Promise<boolean> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await auth.signInWithPopup(provider)

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }, [])

  const signOut = useCallback(() => {
    auth.signOut()
  }, [])

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

  return { loginUser, onSignUpMailPassword, onSignInMailPassword, onSignInWithGoogle, signOut }
}
