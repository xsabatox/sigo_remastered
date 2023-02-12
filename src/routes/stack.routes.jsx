/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../views/Login';
import { Home } from '../views/Home';
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};