/********************************************************************************
DEPENDENCIES
********************************************************************************/
import {Text, View, StyleSheet, Button} from 'react-native';

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

/********************************************************************************
STYLESHEET
********************************************************************************/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
});