/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator } = createNativeStackNavigator();

/********************************************************************************
SCREENS
********************************************************************************/
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';


/********************************************************************************
COMPONENT
********************************************************************************/
export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                nimation: 'slide_from_right',
                animationDuration: 150,
            }}
        >
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    );
};