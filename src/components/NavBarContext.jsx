/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { createContext } from "react";
import SystemNavigationBar from "react-native-system-navigation-bar";
import { colors } from "../constants/Colors";

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export const NavBarContext = createContext();
export function NavBarProvider({ children }) {

/********************************************************************************
SYSTEM NAVIGATION BAR customizes the navigation bar for Android.
SET BAR MODE defines a color scheme to the navigation bar and status.
More info at https://www.npmjs.com/package/react-native-system-navigation-bar.
********************************************************************************/
  SystemNavigationBar.setBarMode("dark", "navigation");
  SystemNavigationBar.setNavigationColor(colors.black);

/********************************************************************************
NAV BAR CONTEXT PROVIDER provides the navigation bar color scheme to all its 
children elements on the APP component. 
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
  return (
    <NavBarContext.Provider 
      value={{
    }}>
      {children}
    </NavBarContext.Provider>
  );
};