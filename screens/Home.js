import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import Searchfilter from "../components/Searchfilter";
const Home = () => {
  const words = [
    {
      name: "python",
      id: "1",
    },
    {
      name: "java",
      id: "2",
    },
    {
      name: "c++",
      id: "3",
    },
    {
      name: "react-native",
      id: "4",
    },
    {
      name: "node",
      id: "5",
    },
    {
      name: "c",
      id: "6",
    },
    {
        name: "react",
        id: "7",
      },
      {
        name: "java-script",
        id: "8",
      },
      {
        name: "nativescript",
        id: "9",
      },
      
  ];

  const [input, setInput] = useState("");
//   console.log(input)
  return (
    <View style={{ margin: 15, width: "90%" }}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: "#d9dbda",
        }}
      >
        <Feather
          name="search"
          size={24}
          color="black"
          style={{ marginLeft: 1, marginRight: 4 }}
        />
        <TextInput
          placeholder="search"
          style={{ fontSize: 15 , width:"90%", height:30,}}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
      </View>
      <Searchfilter input={input}  setInput={setInput} data={words} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
