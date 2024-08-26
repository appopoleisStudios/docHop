import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import OtpTextInput from "react-native-text-input-otp";
export default function App() {
  const [otp, setOtp] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.text_wrapper}>
          <Text
            style={{
              color: "black",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Please enter the verification code we've sent you on +91-
            9819979901.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <OtpTextInput
            otp={otp}
            setOtp={setOtp}
            digits={4}
            style={{
              borderRadius: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              height: 45,
            }}
            fontStyle={{ fontSize: 16, fontWeight: "600" }}
            focusedStyle={{ borderColor: "#96b1fe", borderBottomWidth: 2 }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            Didn’t received code?{" "}
            <Text
              style={{
                color: "#948ef3",
              }}
            >
              Resend
            </Text>
          </Text>
        </View>

        <Pressable
          onPress={() => {
            if (otp == "1234") {
              router.replace("/");
            }
          }}
          style={{
            width: "99%",
            borderRadius: 20,
            backgroundColor: "#96b1fe",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            VERIFY
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 20,
    gap: 30,
    width: "99%",
    justifyContent: "center",
    alignItems: "center",
  },
  text_wrapper: {
    gap: 10,
  },
});
