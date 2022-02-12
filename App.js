import { StyleSheet, SafeAreaView } from 'react-native';
import { RoutesApp } from './src/app/Routes.js';
import React from 'react-native'
import { Provider } from 'react-redux';
import { store } from './src/app/store.js';


export default () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RoutesApp />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#282045'
  },
});
