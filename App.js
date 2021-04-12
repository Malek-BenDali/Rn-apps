import React from 'react';
import Navigation from './src/navigation/MainNavigation';
import {enableScreens} from 'react-native-screens';

enableScreens();
const App = () => {
  return <Navigation />;
};

export default App;
