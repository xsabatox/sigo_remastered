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
    fontSize: 20,
    fontWeight: 'normal'
  },

  boldText: {
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontWeight: 'bold'
  },

  link: {
    color: colors.cyan,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    textDecorationLine: 'underline'
  },

  input: {
    backgroundColor: colors.darkgray,
    borderRadius: 10,
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    height: 70,
    marginBottom: 5,
    marginTop: 5,
    padding: 12,
    width: '90%' 
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.cyan,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    width: '40%'
  }
});