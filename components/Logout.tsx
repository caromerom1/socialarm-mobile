import { StyleProp, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Logout: React.FC<Props> = ({ onPress, style }) => {
  return (
    <Svg viewBox="0 0 24 24" onPress={onPress} style={style}>
      <Path
        d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
        fill="white"
      />
    </Svg>
  );
};
