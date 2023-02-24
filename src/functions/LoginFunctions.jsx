/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
//import Toast from 'react-native-simple-toast';

/********************************************************************************
FUNCTIONS
********************************************************************************/

/********************************************************************************
HANDLE LOGIN authenticates the user to the app, using Google's Firebase 
Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export function handleLogin(email, password, navigation) {
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
			Alert.alert('Title', error.code);
			// if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') 
			// 	console.log('Email ou senha incorretos');

			// if (error.code === 'auth/invalid-email') 
			// 	console.log('Email inválido');
		});
};

/********************************************************************************
HANDLE FORGOT PASSWORD redefines the user's password sending a link to a user
defined account email, using Google's Firebase Authentication service. 
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
// export function handleForgotPassword(email) {
//   if (email === '')
//     return Toast.show('Preencha o campo para redefinir sua senha.');
//   auth()
//     .sendPasswordResetEmail(email)
//     .then(() => {
//     	Toast.show('Verifique seu e-mail para redefinir sua senha.', Toast.LONG);
//     })
//     .catch((error) => {
//     	console.log(error.message);
//   	});
// };