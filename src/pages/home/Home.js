import React, {useContext, useState, useEffect} from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';
import {general} from '../../styles/general';
import InfoContext from '../../context/infoProvider/infoContext';

export default function Home() {
  const {hotels, loading} = useContext(InfoContext);

  const [hotelList, setHotelList] = useState(null);
  useEffect(() => {
    if (hotels) {
      setHotelList(hotels);
    }
  }, [hotels]);

  return (
    <SafeAreaView style={[general.pageContainer]}>
      <StatusBar />
      <Text style={[general.h1]}>Hotel List App</Text>
    </SafeAreaView>
  );
}
