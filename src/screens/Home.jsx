/********************************************************************************
DEPENDENCIES
********************************************************************************/
import {Text, View, StyleSheet, Button} from 'react-native';

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