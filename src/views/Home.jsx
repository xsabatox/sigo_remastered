/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { Pressable, Text, View  } from 'react-native';
import { styles } from '../constants/Styles';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function Home({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        Home</Text>
      <Text>
        {user}
      </Text>
      <Pressable 
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <Text style={styles.boldText}>
          Login</Text>
      </Pressable>
    </View>
  );
};