/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {general} from '../../styles/general';
import {starsFnc} from '../../utils';

const CardSection = ({item, onPress}) => {
  const {name, gallery, price, userRating, currency, stars} = item;

  return (
    <View style={styles.card}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => onPress(name)}>
        <View style={styles.directionRow}>
          {!!gallery && (
            <Image
              style={styles.image}
              source={{
                uri: gallery[0],
              }}
            />
          )}

          <View style={styles.rightBlock}>
            <View
              style={[
                general.ratingBox,
                {backgroundColor: userRating > 8 ? '#7cb342' : '#ff9b05'},
              ]}>
              <Text style={general.ratingText}>{userRating}</Text>
            </View>
            <View style={styles.stars}>
              <Text style={styles.text}>Hotel</Text>
              {starsFnc(stars).map(() => (
                <Icon
                  type="material-community"
                  name="star"
                  color="#f8a523"
                  size={20}
                />
              ))}
            </View>

            <Text style={[styles.title]}>{name}</Text>
            <View style={{position: 'absolute', bottom: 0, right: 0}}>
              <Text style={styles.price}>
                {price}
                {currency}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default function Card({data, onPress}) {
  return (
    <FlatList
      style={[styles.list]}
      data={data}
      renderItem={({item}) => <CardSection item={item} onPress={onPress} />}
      keyExtractor={(item, idx) => idx}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowRadius: 3,
    elevation: 5,
  },
  list: {
    marginTop: 10,
  },
  title: {
    marginTop: 5,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
  },

  image: {
    width: '40%',
    height: 120,
    marginBottom: 2,
  },
  directionRow: {
    flexDirection: 'row',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  rightBlock: {
    marginHorizontal: 10,
    width: '55%',
  },
  price: {
    fontSize: 17,
    fontWeight: '900',
  },
});
