import { TextInput as DefaultTextInput } from 'react-native-paper';

type TextInputProps = React.ComponentProps<typeof DefaultTextInput>;

export const TextInput: React.FC<TextInputProps> = (props) => (
  <DefaultTextInput
    label={props.label}
    mode="outlined"
    outlineColor="#006B3C"
    activeOutlineColor="#006B3C"
    style={{ backgroundColor: 'white', width: '100%', height: 56 }}
    {...props}
  />
);
