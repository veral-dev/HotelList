import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InfoState from '../context/infoProvider/infoState';
import AppStack from './AppStack';

export default function Navigation() {
  return (
    <InfoState>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </InfoState>
  );
}
