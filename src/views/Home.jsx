/********************************************************************************
DEPENDENCIES
********************************************************************************/
import { Text, View, Button } from 'react-native';
import { styles } from '../constants/Styles';

/********************************************************************************
COMPONENT
********************************************************************************/
export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title='Login'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};