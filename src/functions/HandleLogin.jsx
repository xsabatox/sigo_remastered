/********************************************************************************
HANDLE LOGIN authenticates the user to the app, using Google's Firebase 
Authentication service.
More info at https://rnfirebase.io/reference/auth.
********************************************************************************/
export function handleLogin(email, password, navigation) {
    console.log(email, password)
    /*
	if (email === '' || password === '')
		return Toast.show('Preencha todos os campos para se autenticar.');
	auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			navigation.navigate('Home');
			//setEmail('');
			//setPassword('');
		})
		.catch((error) => {
			if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') 
				Toast.show('Email ou senha incorretos');

			if (error.code === 'auth/invalid-email') 
				Toast.show('Email inválido');
		});
    */};