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

export default function App() {

    const [phoneNumber  , setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.text_wrapper}>
          <Text
            style={{
              color: "black",
              fontSize: 44,
              fontWeight: "bold",
            }}
          >
            My mobile
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 12,
            }}
          >
            Please enter your valid phone number. We will send you a 4-digit
            code to verify your account.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextInput
            placeholder="Enter Phone Number"
            onChangeText={(e)=>setPhoneNumber(e)}
            keyboardType="number-pad"
            value={phoneNumber}
            style={{
              borderWidth: 1,
              width: "100%",
              borderRadius: 10,
              height: 50,
              paddingHorizontal: 10,
            }}
          />
        </View>


        <Pressable
          onPress={() => {
            if(phoneNumber == "8209737893"){
                console.log(phoneNumber)
                router.replace("/otpScreen")
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
            LOGIN
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
  },
  text_wrapper: {
    gap: 10,
  },
});
