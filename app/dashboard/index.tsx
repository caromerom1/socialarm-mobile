import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Appbar, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { AlarmList, Logout, View } from "@/components";
import { dates } from "@/constants/dates";

export default function HomePage() {
  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.page}>
        <Appbar style={styles.appbar}>
          <Appbar.Action icon="menu" color="#62a387" />
          <Appbar.Content title="Febrero" color="white" />
          <Logout
            onPress={() => {
              router.replace("/");
            }}
            style={styles.logout}
          />
        </Appbar>
        <AlarmList dates={dates} />
        <FAB
          icon="plus"
          style={styles.fab}
          size="small"
          color="white"
          variant="primary"
          mode="flat"
          onPress={() => router.push("/event/create")}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  appbar: {
    backgroundColor: "#006B3C",
  },
  fab: {
    position: "absolute",
    bottom: 26,
    right: 26,
    borderRadius: 50,
  },
  logout: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
