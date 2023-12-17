import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
import { ThemeContextProvider } from "./context/themeContext";
import { MainStackNavigator } from "./StackNavigator";
import { FullScreenLoadingIndicator } from "./components/LoadingIndicator";

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <FullScreenLoadingIndicator />
    );
  }

  return (
    <RecoilRoot>
      <ThemeContextProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ThemeContextProvider>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
