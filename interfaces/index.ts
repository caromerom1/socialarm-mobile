export interface DateEvent {
  day: string;
  dayName: string;
  events: string[];
  clickAction?: () => void;
}
