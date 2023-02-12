/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

/********************************************************************************
COMPONENT
********************************************************************************/
export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
};