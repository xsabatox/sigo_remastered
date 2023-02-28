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
export async function authRegister(firstName, lastName, email, password, confirmPassword) {
  if (firstName === '') {
    return Alert.alert('Erro', 'Preencha o nome.');
  } else if (lastName === '') {
    return Alert.alert('Erro', 'Preencha o sobrenome.');
  } else if (email === '') {
    return Alert.alert('Erro', 'Preencha o e-mail.');
  } else if (password !== confirmPassword) {
		return Alert.alert('Erro', 'Senhas não correspondem.');
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