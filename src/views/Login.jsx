/********************************************************************************
DEPENDENCIES
********************************************************************************/
import {Text, View, Button} from 'react-native';
import { styles } from '../constants/Styles';

/********************************************************************************
COMPONENT
********************************************************************************/
export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title='Home'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};