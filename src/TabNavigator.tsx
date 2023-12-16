import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ExamplesScreens } from "./screens/ExamplesScreen";
import { CollectionScreen } from "./screens/CollectionScreen";
import { TokenListNavigator } from "./screens/TokenNavigator";
import { Header } from "./components/Header";
import { MarketplaceScreen } from "./screens/MarkePlace";
import { useThemeContext } from "./context/themeContext";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { themeStyle } = useThemeContext();
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
        component={CollectionScreen}
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
            <MaterialCommunityIcons name="gift-open" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={MarketplaceScreen}
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