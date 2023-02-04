/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { Pressable, Text, View  } from 'react-native';
import { styles } from '../constants/Styles';

/********************************************************************************
COMPONENT
********************************************************************************/
export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        Login</Text>
      <Pressable 
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.boldText}>
          Home</Text>
      </Pressable>
    </View>
  );
};