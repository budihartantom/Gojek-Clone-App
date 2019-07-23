import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import iconHome from "./icon/home.png";
import iconOrder from "./icon/order.png";
import iconHelp from "./icon/help.png";
import iconInbox from "./icon/inbox.png";
import iconAccount from "./icon/account.png";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View
          style={{
            height: 54,
            backgroundColor: "yellow",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ width: 26, height: 1, backgroundColor: "white" }} />
            <Image source={iconHome} />
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Home
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "pink",
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ width: 26, height: 1, backgroundColor: "white" }} />
            <Image source={iconOrder} />
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Orders
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "purple",
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ width: 26, height: 1, backgroundColor: "white" }} />
            <Image source={iconHelp} />
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Help
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "brown",
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ width: 26, height: 1, backgroundColor: "white" }} />
            <Image source={iconInbox} />
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "green",
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ width: 26, height: 1, backgroundColor: "white" }} />
            <Image source={iconAccount} />
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
