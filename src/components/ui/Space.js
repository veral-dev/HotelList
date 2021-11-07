import React from 'react';
import {View} from 'react-native';
export default function Space({size}) {
  return (
    <View
      style={{
        marginTop: size || 10,
      }}
    />
  );
}
