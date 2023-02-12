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

  modalContainer: {
    alignItems: 'center',
    backgroundColor: colors.darkgray,
    borderRadius: 25,
    height: 350,
    justifyContent: 'center',
    marginTop: 'auto',
    paddingVertical: 24,
    width: '100%'
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

  link: {
    color: colors.cyan,
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    textDecorationLine: 'underline'
  },

  input: {
    backgroundColor: colors.darkgray,
    borderRadius: 10,
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    height: 70,
    marginBottom: 10,
    padding: 12,
    width: '90%' 
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.cyan,
    borderRadius: 10,
    height: 80,
    justifyContent: 'center',
    width: '80%'
  }
});