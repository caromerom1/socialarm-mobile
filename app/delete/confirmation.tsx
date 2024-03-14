import { DeleteConfirmation, View } from "@/components";
import { Image, StyleSheet } from "react-native";

export default function DeleteAlarmConfirmationPage() {
  return (
    <View style={styles.page}>
      <Image
        style={styles.background}
        source={require("@/assets/images/background.png")}
      />
      <View style={styles.iconContainer}>
        <DeleteConfirmation />
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
  iconContainer: {
    backgroundColor: "transparent",
  },
});
