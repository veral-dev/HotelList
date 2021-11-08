/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import InfoContext from '../../context/infoProvider/infoContext';
// Ui & Styles
import {general} from '../../styles/general';
import Space from '../../components/ui/Space';
import Spinner from '../../components/ui/Spinner';
import Topbar from '../../components/ui/Topbar';
import {Icon} from 'react-native-elements';
import {starsFnc} from '../../utils';

export default function Details({route}) {
  const {hotels, loading} = useContext(InfoContext);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const hotelFiltered = hotels.find(elm => (elm.name = route.params));
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
    <>
      <Topbar text="HotelList.net" buttonToBack />
      <SafeAreaView style={[general.pageContainer]}>
        <StatusBar />
        {loading ? (
          <Spinner />
        ) : (
          <View>
            {!!details.gallery && (
              <Image
                style={[styles.imgDetail]}
                source={{
                  uri: details.gallery[0],
                }}
              />
            )}
            <Space />
            <Text style={styles.title}>{details.name}</Text>
            <Space />
            <View style={styles.stars}>
              <Text style={styles.text}>Hotel</Text>
              {starsFnc(details.stars).map(() => (
                <Icon
                  type="material-community"
                  name="star"
                  color="#f8a523"
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
            <Space size={50} />
          </View>
        )}
      </SafeAreaView>
    </>
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
});
