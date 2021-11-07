import {StyleSheet, StatusBar} from 'react-native';

export const general = StyleSheet.create({
  pageContainer: {
    marginTop: StatusBar.currentHeight || 15,
    marginHorizontal: 15,
    maxHeight: '80%',
  },
  h1: {
    textAlign: 'center',
    maxWidth: '100%',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 10,
  },
  p: {maxWidth: '100%', fontSize: 14, fontWeight: '600'},
});
