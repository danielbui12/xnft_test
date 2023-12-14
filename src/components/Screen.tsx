import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../hooks/useTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[] | null;
};
export function Screen({ style, children }: Props) {
  const { themeStyle } = useTheme();
  return <View style={[styles.screen, themeStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
