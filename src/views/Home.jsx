/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { useContext } from 'react';
import { Pressable, Text, View  } from 'react-native';
import { styles } from '../constants/Styles'
import { AuthContext } from '../components/AuthContext';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function Home({ navigation }) {

  // getting the user object from auth context
  const { user } = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        Home
      </Text>
      <Text>
        {user?.displayName}
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