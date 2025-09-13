/*import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="goals" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  )
}*/

import { Stack } from "expo-router"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebaseConfig"  

export default function RootLayout() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    signOut(auth)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  if (loading) return null 

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
       
        <Stack.Screen name="goals" />
      ) : (
        
        <Stack.Screen name="auth/signin" />
      )}
    </Stack>
  )
}
