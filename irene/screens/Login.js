import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Login ({navigation}) {

  return (
    <View
      style={{
        backgroundColor: "#ff9a8a",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>

      <Text style={{ fontSize: 40, fontWeight: "bold" }}> Welcome To Flower Haven</Text>
      <Text style={{ fontSize: 20, color: "grey" }}>We sell flowers of all kind</Text>
      <Image
         style={{
           borderRadius: 20,
           marginBottom: 10,
           width: 220,
           height: 220,
         }}
         source={{
           uri:" https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
         }}
      />
      <Text style={{ paddingLeft: 10, color: "black" }}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <Text> </Text>
      <Text style={{ paddingLeft: 10, color: "black" }}>No account yet?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}>
        <Text style={{ paddingLeft: 10, color: "white" }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}