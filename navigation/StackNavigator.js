import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../src/WelcomeScreen';
import SwipePage from '../src/SwipePage';
import ProfilePage from '../src/ProfilePage';

const Stack = createStackNavigator();

const StackNavigator =() => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SwipePage" component={SwipePage} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  );
}

export default StackNavigator