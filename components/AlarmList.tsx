import { DateEvent } from "@/interfaces";
import { Text, View } from "./Themed";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

interface AlarmListProps {
  dates: DateEvent[];
}

interface AlarmListItemProps {
  date: DateEvent;
}

export const AlarmList: React.FC<AlarmListProps> = ({ dates }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: 22,
        paddingHorizontal: 16,
        gap: 26,
      }}
    >
      {dates.map((date) => (
        <AlarmListItem key={date.day} date={date} />
      ))}
    </ScrollView>
  );
};

const AlarmListItem: React.FC<AlarmListItemProps> = ({ date }) => {
  return (
    <View style={styles.item}>
      <View>
        <View style={styles.dayContainer}>
          <Text style={styles.day}>{date.day}</Text>
        </View>
        <Text style={styles.dayName}>{date.dayName}</Text>
      </View>
      <View style={styles.eventsContainer}>
        <Events events={date.events} onPress={date.clickAction} />
      </View>
    </View>
  );
};

const Events: React.FC<{ events: string[]; onPress?: () => void }> = ({
  events,
  onPress,
}) => {
  if (events.length === 0) {
    return <Text>No hay eventos.</Text>;
  }

  return (
    <View>
      {events.map((event) => (
        <TouchableOpacity key={event} style={styles.event} onPress={onPress}>
          <Text>{event}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 16,
    paddingVertical: 8,
  },
  dayContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#93B487",
    alignItems: "center",
    justifyContent: "center",
  },
  day: {
    fontSize: 24,
    color: "white",
  },

  dayName: {
    textAlign: "center",
    paddingTop: 2,
  },

  eventsContainer: {
    paddingBottom: 12,
    flex: 1,
  },

  event: {
    padding: 8,
    backgroundColor: "#93B487",
    borderRadius: 8,
    width: "100%",
  },
});
