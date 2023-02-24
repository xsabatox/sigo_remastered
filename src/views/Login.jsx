/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useEffect, useState } from 'react';
import { Modal, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { handleLogin } from '../functions/LoginFunctions';
import { colors } from '../constants/Colors';
import { styles, modalStyles } from '../constants/Styles';
import Toast from 'react-native-simple-toast';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function Login({navigation}) {

/********************************************************************************
STATES
********************************************************************************/
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');
const [ modalVisible, setModalVisible ] = useState(false);

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
        marginTop: 60,
      }}>
        <Pressable 
          onPress={() => handleLogin(email, password, navigation)}
          style={styles.button}>
          <Text 
            style={styles.boldText}>
            Entrar
          </Text>
        </Pressable>
        <Pressable 
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text 
            style={styles.boldText}>
            Registrar
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text 
					style={styles.link}>
		Esqueceu a senha?
		</Text>
      </Pressable>
			<Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
      }}>
        <View style={modalStyles.container}>
					<Text 
						style={modalStyles.title}>
							Esqueci minha senha
					</Text>
          <Text 
						style={modalStyles.text}>
              Preencha o campo abaixo com seu e-mail {'\n'} 
							para recuperar a sua senha:
          </Text>
          <TextInput
						onChangeText={setEmail}
						style={styles.input}
						placeholder='E-mail'
						value={email}
						placeholderTextColor={colors.lightgray}
						keyboardType='email-address'
						autoCapitalize='none'
						autoCorrect={false}>
					</TextInput>
					<Pressable
						onPress={() => {
							handleForgotPassword(email);
							setModalVisible(!modalVisible);
						}}
						style={styles.button}>
						<Text 
							style={styles.boldText}>
							Recuperar
						</Text>
					</Pressable>
        </View>
      </Modal>
		</View>
	);
};