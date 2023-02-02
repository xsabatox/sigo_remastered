/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';

/********************************************************************************
COMPONENT
********************************************************************************/
export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}