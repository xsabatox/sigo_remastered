/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export const AuthContext = createContext();
export function AuthProvider({ children }) {

/********************************************************************************
STATES
********************************************************************************/
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);

/********************************************************************************
USE EFFECT passes ON USER CHANGED to retrieve the user value from Google's 
Firebase Authentication service after the SIGN IN WITH EMAIL AND PASSWORD.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
  useEffect(() => {
    auth().onUserChanged(user => {
      setUser(user);
    });
  },[user]);

/********************************************************************************
AUTH CONTEXT PROVIDER provides a set of variables' values to all its children 
elements on the APP component. USER receives a value from Google's Firebase 
Authentication service, which is updated with the user's first and last name.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        update, 
        setUpdate 
    }}>
      {children}
    </AuthContext.Provider>
  );
};