/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';
import InfoContext from '../../context/infoProvider/infoContext';
// Ui & Styles
import {general} from '../../styles/general';
import Space from '../../components/ui/Space';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import Topbar from '../../components/ui/Topbar';
import {Icon} from 'react-native-elements';
import {starsFnc} from '../../utils';
import ImageCarousel from '../../components/ui/Carrousel';

export default function Details({route}) {
  const {hotels, loading} = useContext(InfoContext);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const hotelFiltered = hotels.find(elm => elm.name === route.params);
    setDetails(hotelFiltered);

    return () => {
      setDetails(null);
    };
  }, [hotels, route.params]);

  if (!details) {
    return (
      <SafeAreaView style={[general.pageContainer]}>
        <View>
          <Text style={[general.h1]}>Hotel not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{flex: 1}}>
        <Topbar text="HotelList" buttonToBack />
        <ScrollView style={[general.pageContainer]}>
          <StatusBar />
          {loading ? (
            <Spinner />
          ) : (
            <View>
              <ImageCarousel
                data={details.gallery.map((item, idx) => {
                  return {title: details.name, uri: item, id: idx};
                })}
              />
              {/* {!!details.gallery && (
                <Image
                  style={[styles.imgDetail]}
                  source={{
                    uri: details.gallery[0],
                  }}
                />
              )} */}
              <Space />
              <Text style={styles.title}>{details.name}</Text>
              <Space />
              <View style={styles.stars}>
                <Text style={styles.text}>Hotel</Text>
                {starsFnc(details.stars).map((elm, idx) => (
                  <Icon
                    type="material-community"
                    name="star"
                    color="#f8a523"
                    key={idx}
                    size={20}
                  />
                ))}
              </View>
              <Space />
              {details.location && (
                <>
                  <Text style={styles.text}>{details.location.address}</Text>
                  <Text style={styles.text}>{details.location.city}</Text>
                </>
              )}
              <Space />
              <View
                style={[
                  general.ratingBox,
                  {
                    backgroundColor:
                      details.userRating > 8 ? '#7cb342' : '#ff9b05',
                  },
                ]}>
                <Text style={general.ratingText}>{details.userRating}</Text>
              </View>
              <Space />
              {details.checkOut && (
                <Text style={styles.text}>
                  Check Out: {details.checkOut.from}-{details.checkOut.from}
                </Text>
              )}
              <Space />
              <View>
                <Text style={styles.text}>
                  Price: {details.price} {details.currency} per night
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.btnBox}>
        <Button
          text="Booking Hotel"
          bgColor="#F2007D"
          onPress={() => console.log('booking')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgDetail: {
    borderRadius: 8,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  text: {
    fontSize: 15,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  btnBox: {
    marginHorizontal: 10,
    marginBottom: 40,
  },
});
