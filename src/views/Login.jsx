/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useEffect, useState } from 'react';
import { Modal, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { handleLogin, handleForgotPassword } from '../functions/LoginFunctions';
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
			<Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text 
					style={styles.link}>
					Esqueceu a senha?
				</Text>
      </Pressable>
			<Pressable 
				//onPress={handleLogin}
				onPress={() => navigation.navigate('Home')}
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
			<Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
      }}>
        <View style={styles.modalContainer}>
          <StatusBar 
						barStyle='light-content' 
						backgroundColor={colors.black}
					/>
					<Text 
						style={styles.boldText}>
							Esqueci minha senha
					</Text>
          <Text 
						style={styles.regularText}>
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
							handleForgotPassword();
							setModalVisible(!modalVisible);
						}}
						style={styles.button}>
						<Text 
							style={styles.boldText}>
							Recuperar acesso
						</Text>
					</Pressable>
        </View>
      </Modal>
		</View>
	);
};