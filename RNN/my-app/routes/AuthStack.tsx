import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={() => (
          <View>
            <Text>Hello World</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;