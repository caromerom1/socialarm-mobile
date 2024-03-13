import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { SociAlarmLogo, Text, TextInput, View } from "@/components";
import LoadingPage from "@/components/LoadingPage";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingPage />;

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <SociAlarmLogo />
      </View>

      <View style={styles.formContainer}>
        <TextInput label="Correo" />

        <View>
          <TextInput label="Clave" secureTextEntry />
          <Text style={styles.forgotPassword}>Olvidó clave?</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          buttonColor="#93B487"
          onPress={() => console.warn("Ingresar")}
        >
          Ingresar
        </Button>
        <Button
          mode="text"
          textColor="#008080"
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              router.replace("/register/");
            }, 3000);
          }}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },
  logoContainer: {
    marginBottom: 66,
  },
  logo: {
    width: 150,
    height: 131,
  },
  formContainer: {
    width: "100%",
    gap: 60,
    marginBottom: 50,
  },
  forgotPassword: {
    color: "#9ECFCF",
    alignSelf: "flex-end",
    marginTop: 9,
    fontWeight: "600",
    paddingEnd: 12.5,
  },
  buttonsContainer: {
    width: "100%",
    gap: 20,
  },
});
