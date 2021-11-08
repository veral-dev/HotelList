import React from 'react';
import {StatusBar, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {general} from '../../styles/general';
import BackButton from './BackButton';

export default function Topbar({text, buttonToBack}) {
  return (
    <View style={styles.bar}>
      <StatusBar />
      <SafeAreaView>
        {buttonToBack && <BackButton />}
        <Text style={[general.h1]}>{text}</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {height: 100, backgroundColor: '#F2007D'},
});
