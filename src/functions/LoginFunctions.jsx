/********************************************************************************
DEPENDENCIES
********************************************************************************/
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

/********************************************************************************
FUNCTIONS
********************************************************************************/

/********************************************************************************
HANDLE LOGIN authenticates the user to the app, using Google's Firebase 
Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export function handleLogin(email, password) {
	if (email === '' || password === '')
		return Toast.show('Preencha todos os campos para se autenticar.');
	auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			navigate('Home');
			//setEmail('');
			//setPassword('');
		})
		.catch((error) => {
			if (
				error.code === 'auth/user-not-found' ||
				error.code === 'auth/wrong-password'
			) {
				const error = 'E-mail ou senha incorretos.';
			}
			if (
				error.code === 'auth/invalid-email'
			) {
				const error = 'Email inválido.';
			}
		Toast.show(error);
		});
};

/********************************************************************************
HANDLE FORGOT PASSWORD redefines the user's password sending a link to a user
defined account email, using Google's Firebase Authentication service. 
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export function handleForgotPassword(email) {
  if (email === '')
    return Toast.show('Preencha o campo para redefinir sua senha.');
  auth()
    .sendPasswordResetEmail(email)
    .then(() => {
    	Toast.show('Verifique seu e-mail para redefinir sua senha.', Toast.LONG);
    })
    .catch((error) => {
    	console.log(error.message);
  	});
};