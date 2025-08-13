/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';

import '~helper/i18n';
import { store, persistor } from './src/redux/store';
import Index from './src/index';


function App() {

   useEffect(() => {
    const timeout = setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000); // 3 giây

    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Index/>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
