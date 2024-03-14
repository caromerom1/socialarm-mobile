import { TextInput, View } from "@/components";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Appbar,
  Button,
  TextInput as TextInputPaper,
} from "react-native-paper";
import { DatePickerInput, TimePickerModal } from "react-native-paper-dates";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AlarmDetailPage() {
  const [inputDate, setInputDate] = useState<Date | undefined>();
  const [inputTime, setInputTime] = useState<string | undefined>();

  const [isEditing, setIsEditing] = useState(false);

  const [visible, setVisible] = useState(false);

  const onDismiss = () => {
    setVisible(false);
  };

  const onConfirm = ({
    hours,
    minutes,
  }: {
    hours: number;
    minutes: number;
  }) => {
    const minutesValue = String(minutes).padStart(2, "0");
    const hoursValue = String(hours).padStart(2, "0");

    setInputTime(`${hoursValue}:${minutesValue}`);
    setVisible(false);
  };

  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.safeArea}>
        <Appbar style={styles.appbar}>
          <Appbar.BackAction color="white" onPress={router.back} />
          <Appbar.Content
            title={isEditing ? "Editar recordatorio" : "Detalle recordatorio"}
            color="white"
          />
        </Appbar>
        <View style={styles.mainContainer}>
          <View style={styles.formContainer}>
            <TextInput label="Título" disabled={!isEditing} />
            <TextInput label="Categoría" disabled />
            <View style={styles.datePickerContainer}>
              <DatePickerInput
                locale="es"
                label="Fecha"
                value={inputDate}
                onChange={(d) => setInputDate(d)}
                inputMode="end"
                mode="outlined"
                iconColor="#006B3C"
                iconStyle={styles.datePickerIcon}
                style={styles.datePicker}
                contentStyle={styles.datePickerContent}
                saveLabel="Guardar"
                selectionColor="#006B3C"
                activeOutlineColor="#006B3C"
                outlineColor="#006B3C"
                editable={false}
                disabled={!isEditing}
              />
            </View>
            <TextInput
              label="Hora"
              disabled={!isEditing}
              right={
                <TextInputPaper.Icon
                  icon="clock-outline"
                  color={isEditing ? "#006B3C" : "#BAB8BC"}
                  style={styles.icon}
                  onPress={() => {
                    setVisible(true);
                  }}
                />
              }
              editable={false}
              value={inputTime}
              onPressIn={() => {
                setVisible(true);
              }}
            />
            <TimePickerModal
              locale="es"
              visible={visible && isEditing}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              defaultInputType="keyboard"
            />
            <TextInput label="Nota" disabled={!isEditing} />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              buttonColor="#93B487"
              onPress={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Guardar" : "Editar"}
            </Button>
            {!isEditing && (
              <Button mode="text" textColor="#008080" onPress={() => {}}>
                Eliminar
              </Button>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#006B3C",
  },
  safeArea: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 46,
    paddingStart: 20,
    paddingEnd: 20,
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
    height: 60,
  },
  datePickerContent: {
    height: 60,
  },
  datePickerIcon: {
    marginTop: 18,
  },
  buttonContainer: {
    gap: 40,
    paddingTop: 20,
    minHeight: 120,
    justifyContent: "center",
    width: "100%",
  },
  icon: {
    marginTop: 15,
  },
});
