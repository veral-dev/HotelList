import React, {useContext, useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import InfoContext from '../../context/infoProvider/infoContext';

// Ui & Styles
import {general} from '../../styles/general';
import Space from '../../components/ui/Space';
import Card from '../../components/ui/Card';
import Spinner from '../../components/ui/Spinner';
import Button from '../../components/ui/Button';

export default function Home({navigation}) {
  const {hotels, loading} = useContext(InfoContext);
  const [searchWord, setSearchWord] = useState('');
  const [hotelList, setHotelList] = useState(null);

  useEffect(() => {
    if (hotels) {
      setHotelList(hotels);
    }
  }, [hotels]);

  const search = () => {
    if (searchWord === '') {
      setAll();
      return;
    }
    const hotelsCopy = [...hotels];
    const hotelsFiltered = hotelsCopy.filter(item =>
      item.name.toLowerCase().includes(searchWord.toLowerCase()),
    );
    setHotelList(hotelsFiltered);
  };

  const setAll = () => {
    setHotelList(hotels);
  };

  return (
    <SafeAreaView style={[general.pageContainer]}>
      <StatusBar />
      <Text style={[general.h1]}>Hotel List</Text>
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Space size={20} />
          <View style={[general.inputContainer]}>
            <TextInput
              style={[general.input]}
              onChangeText={e => setSearchWord(e)}
              value={searchWord}
              placeholder="Buscar"
            />
            <Button text=">" bgColor="#4630EB" onPress={() => search()} />
          </View>
          <Card
            data={hotelList}
            onPress={hotel => navigation.navigate('Details', hotel)}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
