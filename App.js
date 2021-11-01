import * as React from "react";
import { KeyboardAvoidingView, Platform, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store from "./redux/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={"Home"}
              headerMode="none"
            >
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
