import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from './src/context/AppContext';
import Splash from './src/screens/auth/Splash';
import Toast from './src/component/Emitter/tost';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store, persistor } from './src/services/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //  requestUserPermission();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppProvider>

            {loading ? <Splash /> : <RootNavigator />}
            <Toast />
          </AppProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
