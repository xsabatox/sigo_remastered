/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useState } from 'react';
import { Pressable, StatusBar, Text, TextInput, View  } from 'react-native';
import { colors } from '../constants/Colors';
import { styles } from '../constants/Styles';

/********************************************************************************
COMPONENT
********************************************************************************/
export function Login({ navigation }) {

/********************************************************************************
STATES
********************************************************************************/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={colors.black}
      />
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        autoComplete='email'
        placeholder='E-mail'
        keyboardType='email-address'
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        autoComplete='password'
        placeholder='Senha'
        keyboardType='default'
        secureTextEntry={true}
      />
      <Pressable 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text 
          style={styles.boldText}>
          Entrar
        </Text>
      </Pressable>
    </View>
  );
};