import React from "react";
import { View,Text } from "react-native";
import WelcomeScreen from "./src/WelcomeScreen";
import SwipePage from "./src/SwipePage";
import StackNavigator from "./navigation/StackNavigator";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/UserContext";


const App = () => {
  return(
    <UserProvider>
    <NavigationContainer>

      <StackNavigator/> 
    </NavigationContainer>
    </UserProvider>
  )
}

export default App