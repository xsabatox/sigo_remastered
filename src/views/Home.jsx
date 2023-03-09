/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { Pressable, Text, View  } from 'react-native';
import { styles } from '../constants/Styles';
import { AuthContext } from '../components/AuthContext';
import { useContext } from 'react';

/********************************************************************************
BEGIN COMPONENT
********************************************************************************/
export function Home({ navigation }) {

	const {user} = useContext(AuthContext);
	
	useEffect(() => {
		if (user) navigation.navigate('Home');
	}, [user]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        Home</Text>
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