/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { StyleSheet } from "react-native";
import { colors } from "./Colors";
import "../assets/fonts/Montserrat-Regular.ttf";
import "../assets/fonts/Montserrat-Bold.ttf";

/********************************************************************************
COMPONENT
********************************************************************************/
export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.black,
      flex: 1,
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: colors.cyan,
      borderRadius: 10,
      height: 80,
      justifyContent: 'center',
      width: '80%'
    },
    regularText: {
      color: colors.white,
      fontFamily: 'Montserrat-Regular',
      fontSize: 24,
      fontWeight: 'normal'
    },
    boldText: {
      color: colors.white,
      fontFamily: 'Montserrat-Regular',
      fontSize: 24,
      fontWeight: 'bold'
    },
  });