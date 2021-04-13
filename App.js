import React from 'react';
import Navigation from './src/navigation/MainNavigation';
import {enableScreens} from 'react-native-screens';
import {store} from './src/apps/MealApp/store/store';
import {Provider} from 'react-redux';

enableScreens();
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
