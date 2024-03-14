import { CheckMark, View } from "@/components";
import { Image, StyleSheet } from "react-native";

export default function RegisterConfirmationPage() {
  return (
    <View style={styles.page}>
      <Image
        style={styles.background}
        source={require("@/assets/images/background.png")}
      />
      <View style={styles.checkmarkContainer}>
        <CheckMark />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  checkmarkContainer: {
    transform: [{ translateX: 12 }],
    backgroundColor: "transparent",
  },
});
