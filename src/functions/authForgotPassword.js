/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

/********************************************************************************
AUTH FORGOT PASSWORD redefines the user's password sending a link to a user
defined account email, using Google's Firebase Authentication service. 
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export function authForgotPassword(email, navigation) {
  if (email === '')
    return Alert.alert('Preencha o campo para redefinir sua senha.');
  auth()
    .sendPasswordResetEmail(email)
    .then(() => {
    	Alert.alert('Verifique seu e-mail para redefinir sua senha.');
      navigation.navigate('Login');
    })
    .catch((error) => {
    	Alert.alert(error.message);
  	});
};