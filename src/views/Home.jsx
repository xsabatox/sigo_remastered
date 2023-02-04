/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { Pressable, Text, View  } from 'react-native';
import { styles } from '../constants/Styles';

/********************************************************************************
COMPONENT
********************************************************************************/
export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        Home</Text>
      <Pressable 
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <Text style={styles.boldText}>
          Login</Text>
      </Pressable>
    </View>
  );
};