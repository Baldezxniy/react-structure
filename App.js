import { StyleSheet, Text, View } from 'react-native';
import { RoutesApp } from './src/app/Routes.js';

export default ()=> {
  
  return (
    <View style={styles.container}>
      <RoutesApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
