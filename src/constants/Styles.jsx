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

    input: {
      backgroundColor: colors.darkgray,
      borderRadius: 10,
      color: colors.lightgray,
      fontSize: 16,
      fontFamily: 'Montserrat-Regular',
      height: 70,
      marginBottom: 10,
      padding: 12,
      width: '80%' 
    },

    button: {
      alignItems: 'center',
      backgroundColor: colors.cyan,
      borderRadius: 10,
      height: 80,
      justifyContent: 'center',
      width: '80%'
    },

  });