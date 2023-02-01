import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}