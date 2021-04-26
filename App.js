import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Paragraph = (props) => {
  return <Text style={styles.paragraph}>{props.children}</Text>;
}; //hacemos un componente para los parrafos, para no poner en cada parrafo lo de style style.paragraph

export default function App() {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.title}>Contact</Text>
        <Image source={require("./assets/contact.jpg")} style={styles.image} />
        <View style={styles.box} />
        <Paragraph>Calle Atlantic Pl 16</Paragraph>
        <Paragraph>(San Juan, Puerto Rico)</Paragraph>
        <Paragraph>Phone: 787 857 7852</Paragraph>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    borderWidth: 5,
    alignItems: "center",
    padding: 40,
  },
  box: {
    width: 300,
    height: 2,
    backgroundColor: "#D7D7D7",
    opacity: 1,
    marginTop: 30,
    marginBottom: 30,
    //elevation: 20,  //elevation solo funciona para Android, no para iOS, es para hacer sombras
    // shadowColor: "black",
  },
  paragraph: {
    // marginBottom: ,
    lineHeight: 20,
    textAlign: "center",
    color: "#D7D7D7",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    height: 80,
    textAlignVertical: "top",
    color: "#D7D7D7",
  },

  image: {
    width: 250,
    height: 450,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "black",
    resizeMode: "contain",
  },
});
