import {StyleSheet, StatusBar} from 'react-native';

export const general = StyleSheet.create({
  pageContainer: {
    marginTop: StatusBar.currentHeight || 15,
    marginHorizontal: 15,
    maxHeight: '80%',
    paddingBottom: 20,
  },
  h1: {
    textAlign: 'center',
    maxWidth: '100%',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 10,
    color: '#fff',
  },
  p: {maxWidth: '100%', fontSize: 14, fontWeight: '600'},
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  ratingBox: {
    width: 40,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  ratingText: {color: '#fff', fontWeight: '900'},
});
