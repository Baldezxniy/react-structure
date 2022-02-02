import { StyleSheet, View } from 'react-native';
import { RoutesApp } from './src/app/Routes.js';
import React from 'react-native'
import { Provider } from 'react-redux';
import { store } from './src/app/store.js';


export default () => {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RoutesApp />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
