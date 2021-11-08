import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
export default function Button({
  text,
  onPress,
  bgColor,
  color,
  borderColor = '#F2007D',
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: bgColor, borderColor: borderColor, borderWidth: 1},
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: color || '#ffffff'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    minWidth: 50,
  },
  buttonText: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
