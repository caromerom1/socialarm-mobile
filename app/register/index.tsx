import { Text, TextInput, View } from "@/components";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

export default function RegisterPage() {
  const [inputDate, setInputDate] = useState<Date | undefined>();

  return (
    <View style={styles.page}>
      <Text style={styles.header}>Registro</Text>
      <View style={styles.formContainer}>
        <TextInput label="Nombre" />
        <View style={styles.datePickerContainer}>
          <DatePickerInput
            locale="es"
            label="Fecha de nacimiento"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="end"
            mode="outlined"
            iconColor="#006B3C"
            iconStyle={styles.datePickerIcon}
            style={styles.datePicker}
            saveLabel="Guardar"
            selectionColor="#006B3C"
            activeOutlineColor="#006B3C"
            outlineColor="#006B3C"
            editable={false}
          />
        </View>
        <TextInput label="Correo" />
        <TextInput label="Teléfono" />
        <TextInput label="Clave" secureTextEntry />
        <TextInput label="Confirmar clave" secureTextEntry />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          buttonColor="#93B487"
          onPress={() => {
            router.replace("/register/confirmation");
            setTimeout(() => {
              router.replace("/");
            }, 5000);
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
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#006B3C",
    alignSelf: "flex-start",
  },
  formContainer: {
    width: "100%",
    gap: 46,
    marginBottom: 50,
  },
  datePickerContainer: {
    height: 60,
  },
  datePicker: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
  },
  datePickerIcon: {
    marginTop: 21,
  },
  buttonContainer: {
    width: "100%",
  },
});
