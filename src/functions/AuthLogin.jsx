/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

/********************************************************************************
AUTH LOGIN authenticates the user to the app, using Google's Firebase 
Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export function authLogin(email, password, navigation) {
	if (email === '' || password === '')
		return Alert.alert('Preencha todos os campos para se autenticar.');
	auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			navigation.navigate('Home');
			//setEmail('');
			//setPassword(''); 
		})
		.catch((error) => {
			if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') 
				Alert.alert('Erro', 'Email ou senha incorretos.');
				
			if (error.code === 'auth/invalid-email') 
				Alert.alert('Erro', 'Email inválido.');
		});
};