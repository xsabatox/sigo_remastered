/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useState } from 'react';
import { Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { authForgotPassword } from '../functions/AuthForgotPassword';
import { colors } from '../constants/Colors';
import { styles } from '../constants/Styles';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function ForgotPassword({ navigation }) {

/********************************************************************************
STATES
********************************************************************************/
const [ email, setEmail ] = useState('');

	return (
		<View style={styles.container}>
			<StatusBar 
				barStyle='light-content' 
				backgroundColor={colors.black}
			/>
      <Text style={styles.regularText}>
        Preencha o seu e-mail para recuperar a sua senha:
      </Text>
			<TextInput
				onChangeText={setEmail}
				value={email}
				style={styles.input}
				autoCapitalize='none'
				autoComplete='email'
				placeholder='E-mail'
				placeholderTextColor={colors.gray}
				keyboardType='email-address'
				marginTop={25}
			/>
      <View style={{ 
        flexDirection: 'row',
        marginTop: 25}}>
        <Pressable 
          onPress={() => authForgotPassword(email, navigation)}
          style={styles.button}>
          <Text 
            style={styles.boldText}>
            Recuperar
          </Text>
        </Pressable>
		  </View>
    </View>
	);
};