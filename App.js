import { StyleSheet,  View } from 'react-native';
import { RoutesApp } from './src/app/Routes.js';
import React from 'react-native'

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
