import React, {useContext, useState, useEffect} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import InfoContext from '../../context/infoProvider/infoContext';
import {Icon} from 'react-native-elements';

// Ui & Styles
import {general} from '../../styles/general';
import Space from '../../components/ui/Space';
import Card from '../../components/ui/Card';
import Spinner from '../../components/ui/Spinner';
import Button from '../../components/ui/Button';
import Topbar from '../../components/ui/Topbar';

export default function Home({navigation}) {
  const {hotels, loading} = useContext(InfoContext);
  const [searchWord, setSearchWord] = useState('');
  const [hotelList, setHotelList] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);

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

  const sortByRating = () => {
    const hotelsCopy = [...hotels];
    const hotelsFiltered = hotelsCopy.sort((a, b) => {
      return b.userRating - a.userRating;
    });
    setHotelList(hotelsFiltered);
    setOpenFilter(false);
  };

  const setAll = () => {
    setHotelList(hotels);
  };

  return (
    <>
      <Topbar text="HotelList" />
      <View style={[general.pageContainer]}>
        {loading ? (
          <Spinner />
        ) : (
          <View>
            <Space size={20} />
            <View style={[general.inputContainer]}>
              <Icon
                type="material-community"
                name="filter-variant"
                color="#000"
                size={30}
                containerStyle={{marginRight: 5}}
                onPress={() => setOpenFilter(!openFilter)}
              />
              <TextInput
                style={[general.input]}
                onChangeText={e => setSearchWord(e)}
                value={searchWord}
                placeholder="Buscar"
              />
              <Button
                text="Search"
                bgColor="#F2007D"
                onPress={() => search()}
              />
            </View>
            {openFilter && (
              <View style={styles.filterBox}>
                <Text style={styles.filterTitle}>Order by:</Text>
                <Button
                  text="User rating"
                  color="#F2007D"
                  onPress={() => sortByRating()}
                />
              </View>
            )}
            <Card
              data={hotelList}
              onPress={hotel => navigation.navigate('Details', hotel)}
            />
          </View>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  filterBox: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterTitle: {fontSize: 18, fontWeight: '700'},
});
