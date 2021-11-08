import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.btn}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Text style={styles.text}>{'<'}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    maxWidth: 30,
    position: 'absolute',
    left: 10,
  },
  text: {
    color: '#fff',
  },
  btn: {
    zIndex: 10,
  },
});
