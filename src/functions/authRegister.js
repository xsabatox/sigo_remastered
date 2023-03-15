/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { capitalizeFirst } from './capitalizeFirst';

/********************************************************************************
AUTH REGISTER creates an new user passing an email and password to Google's 
Firebase Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export async function authRegister(firstName, lastName, email, password, confirmPassword, navigation) {
  if (firstName === '') {
    return Alert.alert('Erro', 'Preencha o nome.');
  } else if (lastName === '') {
    return Alert.alert('Erro', 'Preencha o sobrenome.');
  } else if (email === '') {
    return Alert.alert('Erro', 'Preencha o e-mail.');
  } else if (password === '') {
    return Alert.alert('Erro', 'Preencha a senha.');
  } else if (confirmPassword === '') {
    return Alert.alert('Erro', 'Confirme a senha.');  
  } else if (password !== confirmPassword) {
		return Alert.alert('Erro', 'Senhas não correspondem.');
  } else {
    const fullName = capitalizeFirst(`${firstName} ${lastName}`);
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        await user.updateProfile({
          displayName: fullName,
        });
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') 
          Alert.alert('Erro', 'Sua senha deve possuir no mínimo 6 dígitos.');
        if (error.code === 'auth/invalid-email') 
          Alert.alert('Erro', 'Email inválido.');
        if (error.code === 'auth/email-already-in-use')
          Alert.alert('Erro', 'Este e-mail já está em uso.');
      });
  };
};