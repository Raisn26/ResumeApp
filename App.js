import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import meme from "./xb.jpeg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.text1}>My name is Roy Sun.</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.text1}>I am a student of AOF.</Text>
      </View>
      <Text style={styles.text2}>I like to eat In n Out</Text>
      <TouchableOpacity onPress={() => alert("你惊扰了witch")}>
        <Image source={meme} style={styles.image} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  redBox: {
    backgroundColor: "#ff0049",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    backgroundColor: "#0051ff",
    alignItems: "center",
    justfyContent: "center",
  },
  text1: {
    color: "#00ff00",
    fontsize: 29,
  },
  text2: {
    color: "#ff0000",
    fontsize: 9,
  },
});
