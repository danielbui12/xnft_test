import { View, StyleSheet, StyleProp, ViewStyle, Image, SafeAreaView } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../consts/styles";
import { useThemeContext } from "../context/themeContext";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[] | null;
};
export function Screen({ style, children }: Props) {
  const { themeStyle } = useThemeContext();
  return (
    <SafeAreaView style={[styles.screen, themeStyle]}>
      {/* START: Page Background */}
      <Image
        source={require("../assets/images/bg-top.png")}
        alt="Top Background Image"
        style={[styles.bgTop]}
        blurRadius={10}
      />
      <Image
        source={require("../assets/images/bg-bottom.png")}
        alt="Bottom  Image"
        style={[styles.bgBottom]}
        blurRadius={100}
      />
      {/* END: Page Background */}
      <View style={[styles.container,style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  container: {
    paddingHorizontal: 12,
  },
  bgTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    zIndex: 0,
  },
  bgBottom: {
    position: 'absolute',
    top: DEVICE_WIDTH,
    left: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    zIndex: 0,
  }
});
