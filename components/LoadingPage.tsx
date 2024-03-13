import { Animated, Image, StyleSheet } from "react-native";

import { View } from "@/components";

export default function LoadingPage() {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ).start();

  return (
    <View style={styles.page}>
      <Image style={styles.background} source={require("@/assets/images/background.png")} />
      <Animated.Image
        style={[
          styles.loader,
          {
            transform: [
              {
                rotate: spinValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          },
        ]}
        source={require("@/assets/images/loader.png")}
      />
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
  loader: {
    width: 100,
    height: 100,
  },
});
