import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
import { ThemeContextProvider } from "./context/themeContext";
import { TabNavigator } from "./TabNavigator";

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <ThemeContextProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ThemeContextProvider>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
