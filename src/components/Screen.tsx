import { View, StyleSheet, StyleProp, ViewStyle, Image, SafeAreaView, useWindowDimensions } from "react-native";
import { useThemeContext } from "../hooks/useThemeContext";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[] | null;
};
export function Screen({ style, children }: Props) {
  const { themeStyle } = useThemeContext();
  const viewport = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.screen, style, themeStyle]}>
      {/* START: Page Background */}
      <Image
        source={require("../assets/images/bg-top.png")}
        alt="Top Background Image"
        style={[styles.bgTop, {
          width: viewport.width,
          height: viewport.height,
          backgroundColor: 'black'
        }]}
        blurRadius={10}
      />
      <Image
        source={require("../assets/images/bg-bottom.png")}
        alt="Bottom  Image"
        style={[styles.bgBottom, {
          width: viewport.width,
          height: viewport.height,
          top: viewport.height,
          backgroundColor: 'black'
        }]}
        blurRadius={10}
        
      />
      {/* END: Page Background */}
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    paddingBottom: 24,
    overflow: 'hidden'
  },
  container: {
    paddingHorizontal: 12,
    flex: 1
  },
  bgTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  bgBottom: {
    position: 'absolute',
    left: 0,
    zIndex: 0,
  }
});
