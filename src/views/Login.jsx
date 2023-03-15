/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useState } from 'react';
import { Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { authLogin } from '../functions/authLogin';
import { colors } from '../constants/Colors';
import { styles } from '../constants/Styles';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function Login({ navigation }) {

/********************************************************************************
STATES
********************************************************************************/
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<View style={styles.container}>
			<StatusBar 
				barStyle='light-content' 
				backgroundColor={colors.black}
			/>
			<TextInput
				onChangeText={setEmail}
				value={email}
				style={styles.input}
				autoCapitalize='none'
				autoComplete='email'
				placeholder='E-mail'
				placeholderTextColor={colors.gray}
				keyboardType='email-address'
			/>
			<TextInput
				onChangeText={setPassword}
				value={password}
				style={styles.input}
				autoCapitalize='none'
				autoComplete='password'
				placeholder='Senha'
				placeholderTextColor={colors.gray}
				keyboardType='default'
				secureTextEntry={true}
			/>
      <View style={{ 
        flexDirection: 'row',
        marginTop: 25}}>
        <Pressable 
          onPress={() => 
						authLogin(
							email, 
							password, 
							navigation)}
          style={styles.button}>
          <Text 
            style={styles.boldText}>
            Entrar
          </Text>
        </Pressable>
        <Pressable 
          onPress={() => navigation.navigate('Register')}
          style={styles.button}>
          <Text 
            style={styles.boldText}>
            Registrar
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text 
					style={styles.link}>
					Esqueceu a senha?
				</Text>
      </Pressable>
		</View>
	);
};