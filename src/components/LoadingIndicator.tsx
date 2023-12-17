import { ActivityIndicator, View, useWindowDimensions } from "react-native";

export const FullScreenLoadingIndicator = () => {
  const viewport = useWindowDimensions();
  
  return (
    <View style={{ ...viewport, position: 'absolute', top: 0, left: 0, flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator />
    </View>
  );
}