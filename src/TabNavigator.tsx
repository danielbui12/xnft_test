import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { ExamplesScreens } from "./screens/ExamplesScreen";
import { CollectionScreen } from "./screens/CollectionScreen";
import { TokenListNavigator } from "./screens/TokenNavigator";
import { Header } from "./components/Header";
import { MarketplaceScreen } from "./screens/MarkePlace";
import { useThemeContext } from "./hooks/useThemeContext";
import { COLORS } from "./consts/color";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { themeStyle } = useThemeContext();
  return (
    <Tab.Navigator
      initialRouteName="Collection"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarActiveBackgroundColor: themeStyle.backgroundColor,
        tabBarInactiveBackgroundColor: themeStyle.backgroundColor,
        header: Header
      }}
    >
      <Tab.Screen
        name="Collection"
        component={(props: any) => <CollectionScreen {...props}/>}
        options={{
          tabBarLabel: "Collection",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="collections" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Reward"
        component={TokenListNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Reward",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift-open" color={color} size={size} />
            ),
        }}
      /> */}
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