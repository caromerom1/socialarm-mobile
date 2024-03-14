import { DateEvent } from "@/interfaces";
import { router } from "expo-router";

export const dates: DateEvent[] = [
  {
    day: "14",
    dayName: "Mie",
    events: [],
  },
  {
    day: "15",
    dayName: "Jue",
    events: ["Entrega UX"],
    clickAction: () => {
      router.replace("/event/edit");
    },
  },
  {
    day: "16",
    dayName: "Vie",
    events: [],
  },
  {
    day: "17",
    dayName: "Sab",
    events: [],
  },
  {
    day: "18",
    dayName: "Dom",
    events: [],
  },
  {
    day: "19",
    dayName: "Lun",
    events: [],
  },
  {
    day: "20",
    dayName: "Mar",
    events: [],
  },
  {
    day: "21",
    dayName: "Mie",
    events: [],
  },
  {
    day: "22",
    dayName: "Jue",
    events: ["Entrega UX"],
    clickAction: () => {
      router.replace("/event/edit");
    },
  },
  {
    day: "24",
    dayName: "Sab",
    events: [],
  },
  {
    day: "25",
    dayName: "Dom",
    events: [],
  },
];
