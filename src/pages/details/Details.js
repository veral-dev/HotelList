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
import Space from '../../components/ui/Space';
import Spinner from '../../components/ui/Spinner';
import {general} from '../../styles/general';

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
    <SafeAreaView style={[general.pageContainer]}>
      <StatusBar />
      {loading ? (
        <Spinner />
      ) : (
        <View>
          <Text style={[general.h1]}>{details.name}</Text>
          <Space size={30} />
          {!!details.gallery && (
            <Image
              style={[styles.imgDetail]}
              source={{
                uri: details.gallery[0],
              }}
            />
          )}
          <Space />

          {/* <Text style={[general.p]}>{details && details.description}</Text> */}
          <Space size={50} />

          {/* <Button
            text="Ver en el navegador"
            bgColor="#4630EB"
            onPress={() => openURL(details.url)}
          /> */}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgDetail: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 200,
    marginBottom: 10,
  },
});
