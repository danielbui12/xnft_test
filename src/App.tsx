import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { useTheme } from './hooks/useTheme';

import { ExamplesScreens } from "./screens/ExamplesScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { TokenListNavigator } from "./screens/TokenNavigator";
import Header from "./components/Header";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { themeStyle } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Collection"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarActiveBackgroundColor: themeStyle.backgroundColor,
        tabBarInactiveBackgroundColor: themeStyle.backgroundColor,
        header: Header
      }}
    >
      <Tab.Screen
        name="Collection"
        component={HomeScreen}
        options={{
          tabBarLabel: "Collection",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="collections" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={TokenListNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Reward",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift-open" color={color} size={size} />          ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={ExamplesScreens}
        options={{
          tabBarLabel: "Marketplace",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="scale-balance" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
