import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

import {FETCH_HOTELS, SHOW_LOADING, HIDE_LOADING} from '../types/info-types';
import InfoContext from './infoContext';
import InfoReducer from './infoReducer';

export default function InfoProvider({children}) {
  const initialState = {
    hotels: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(InfoReducer, initialState);
  const fetchHotels = async () => {
    try {
      dispatch({
        type: SHOW_LOADING,
      });
      const resp = await axios.get(
        'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507',
      );
      setStorage(resp.data);
      dispatch({
        type: FETCH_HOTELS,
        payload: resp.data,
      });
    } catch (error) {
      const jsonValue = await AsyncStorage.getItem('hotels');
      if (jsonValue) {
        dispatch({
          type: FETCH_HOTELS,
          payload: JSON.parse(jsonValue),
        });
      } else {
        Alert.alert(error);
      }
    } finally {
      dispatch({
        type: HIDE_LOADING,
      });
    }
  };

  const setStorage = async data => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('hotels', jsonValue);
    } catch (error) {
      Alert.alert(error);
    }
  };

  useEffect(() => {
    if (!state.hotels) {
      fetchHotels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfoContext.Provider
      value={{hotels: state.hotels, loading: state.loading}}>
      {children}
    </InfoContext.Provider>
  );
}
