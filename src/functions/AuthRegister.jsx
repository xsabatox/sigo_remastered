/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

/********************************************************************************
AUTH REGISTER creates an new user passing an email and password to Google's 
Firebase Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export async function authRegister(email, password, confirmPassword) {
	if (password !== confirmPassword) {
		return Alert.alert('Senhas não correspondem.');
  } else {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        await user.updateProfile({
          displayName: 'TESTE_NOME'
        });
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') 
          Alert.alert('Erro', 'Sua senha deve possuir no mínimo 6 dígitos.');
        if (error.code === 'auth/invalid-email') 
          Alert.alert('Erro', 'Email inválido.');
        if (error.code === 'auth/email-already-in-use')
          Alert.alert('Erro', 'Este e-mail já está em uso.');
      });
  }
};