import React from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';
import {general} from '../../styles/general';

export default function Home() {
  return (
    <SafeAreaView style={[general.pageContainer]}>
      <StatusBar />
      <Text style={[general.h1]}>Hotel List App</Text>
    </SafeAreaView>
  );
}
