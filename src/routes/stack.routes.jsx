/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../screens/Login';
import { Register } from "../screens/Register";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Home } from '../screens/Home';
const { Screen, Navigator } = createNativeStackNavigator();

/********************************************************************************
COMPONENT
********************************************************************************/
export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};