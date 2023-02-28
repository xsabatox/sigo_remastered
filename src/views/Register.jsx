/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useState } from 'react';
import { Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { authRegister } from '../functions/AuthRegister';
import { colors } from '../constants/Colors';
import { styles } from '../constants/Styles';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function Register({navigation}) {

/********************************************************************************
STATES
********************************************************************************/
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
		<View style={styles.container}>
			<StatusBar 
				barStyle='light-content' 
				backgroundColor={colors.black}
			/>
      <TextInput
				onChangeText={setFirstName}
				value={firstName}
				style={styles.input}
				autoCapitalize='words'
				autoComplete='name'
				placeholder='Nome'
				placeholderTextColor={colors.gray}
				keyboardType='default'
			/>
      <TextInput
				onChangeText={setLastName}
				value={lastName}
				style={styles.input}
				autoCapitalize='words'
				autoComplete='family-name'
				placeholder='Sobrenome'
				placeholderTextColor={colors.gray}
				keyboardType='default'
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
				placeholder='Senha'
				placeholderTextColor={colors.gray}
				keyboardType='default'
				secureTextEntry={true}
			/>
      <TextInput
				onChangeText={setConfirmPassword}
				value={confirmPassword}
				style={styles.input}
				autoCapitalize='none'
				placeholder='Confirmar senha'
				placeholderTextColor={colors.gray}
				keyboardType='default'
				secureTextEntry={true}
			/>
      <Pressable 
        onPress={() => 
          authRegister(
            email, 
            password, 
            confirmPassword)}
        style={styles.button}>
        <Text 
          style={styles.boldText}>
          Registrar
        </Text>
      </Pressable>
    </View>
  );
};