import { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig"
import { useRouter } from "expo-router"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.replace("/goals") // ✅ go to goals after login
    } catch (error) {
      console.log("Login error:", error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/signup")}>
        <Text style={{ marginTop: 20 }}>
          Don’t have an account? Sign Up
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 6 },
  button: { backgroundColor: "#21cc8d", padding: 15, borderRadius: 6, alignItems: "center" }
})
