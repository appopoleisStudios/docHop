import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.images}>
          <Image source={require("../assets/SplashScreen/HomeIcon.png")} />
          <Image
            source={require("../assets/SplashScreen/DocHop.png")}
            style={{ marginTop: 10 }}
          />
        </View>

        <View style={styles.text_wrapper}>
          <Text
            style={{
              color: "white",
              width: "90%",
              textAlign: "center",
              fontSize: 12,
            }}
          >
            By tapping ‘Sign in’ you agree to our Terms. Learn how we process
            your data in our Privacy Policy and Cookies Policy.
          </Text>
          <Pressable
            onPress={()=>router.replace("/login")}
            style={{
              width: "80%",
              borderRadius: 20,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                color: "#96b1fe",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96b1fe",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "99%",
  },
  images: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  text_wrapper: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 30,
  },
});
