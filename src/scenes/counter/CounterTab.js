import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useToast } from "react-native-styled-toast";

import global from "_scenes/login/Global";
import sty from "_styles";
import firebase from "../login/FirebaseConfig";

const CounterTab = ({ navigation }) => {
  const { toast } = useToast();
  const user = global.user;

  useEffect(() => {
    toast({ message: "Login successfully" });
  }, []);

  const showLogOutAlert = () => {
    Alert.alert(
      "Alert",
      "Are you sure you wanna sign out?",
      [
        { text: "No Thanks", onPress: () => {} },
        { text: "Yes", onPress: () => navigation.navigate("Login") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const generateSample = async () => {
    let currentTime = Math.floor(new Date().getTime() / 1000.0);

    await firebase
      .firestore()
      .collection("orders")
      .add({
        orderCompletedTime: "",
        orderCreatedTime: currentTime,
        orderFoods: [
          "b4Mh1sbRlCsSaQfIsTBO",
          "cUhDgn3PnXq1ZiLadE0G",
          "1AWPRrnqDTnwGSyiD1W9",
        ],
        orderStatus: "0",
        orderTotal: "78",
        userId: "onrZeVLv0CYSfrwl41zA2OUPwt33",
      })
      .then(() => {
        console.log("Added");
      });
  };

  const generateSample2 = async () => {
    let currentTime = Math.floor(new Date().getTime() / 1000.0);

    await firebase
      .firestore()
      .collection("orders")
      .add({
        orderCompletedTime: "",
        orderCreatedTime: currentTime,
        orderFoods: [
          "cNHnO8BiLiNkaTYXxGsL",
          "LBhficobmrlYRTjz8NpQ",
          "NjSKClpWJ0TFppTx2w8A",
          "NjSKClpWJ0TFppTx2w8A",
        ],
        orderStatus: "0",
        orderTotal: "42",
        userId: "maDiTzl2DQcTHhXi7s4RbVMbiGn2",
      })
      .then(() => {
        console.log("Added");
      });
  };

  return (
    <View
      style={[
        sty.container,
        // { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <View style={{ flex: 1, marginTop: 10, backgroundColor: "transparent" }}>
        <Text style={sty.titleText}>
          Dashboard <Ionicons name="ios-menu" size={24} color="black" />
        </Text>
        <View style={sty.titleDivider} />
      </View>
      <View style={{ flex: 9, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={localStyle.button}
          onPress={() => {
            navigation.navigate("MenuListScreen");
          }}
        >
          <Text style={localStyle.buttonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyle.button} onPress={showLogOutAlert}>
          <Text style={localStyle.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyle.button} onPress={generateSample}>
          <Text style={localStyle.buttonText}>generateSample</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localStyle.button} onPress={generateSample2}>
          <Text style={localStyle.buttonText}>generateSample2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 60,
    width: 250,
    backgroundColor: "#f98640",
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "inter-bold",
    color: "#fff",
    justifyContent: "center",
    fontSize: 20,
  },
  // titleText: {
  //   fontFamily: "inter-bold",
  //   fontSize: 30,
  // },
  // titleDivider: {
  //   marginTop: 5,
  //   height: 1,
  //   backgroundColor: "black",
  //   opacity: 0.2,
  // },
});

export default CounterTab;
