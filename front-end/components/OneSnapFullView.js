import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';

const handleIcon = (category) => {
  switch (category) {
    case 'fitness':
      return <Image source={require('../assets/images/Icons/fitness-48.png')}
        style={styles.image} />
    case 'shop':
      return <Image source={require('../assets/images/Icons/shop-64.png')}
        style={styles.image} />
    case 'food':
      return <Image source={require('../assets/images/Icons/food.png')}
        style={styles.image} />
    case 'nightlife':
      return <Image source={require('../assets/images/Icons/dancing-64.png')}
        style={styles.image} />
    case 'beauty':
      return <Image source={require('../assets/images/Icons/lipstick-40.png')}
        style={styles.image} />
    default:
      return <Image source={require('../assets/images/Icons/experience-40.png')}
        style={styles.image} />
  }
}

export default function OneSnapFullView(props) {
  const { place, user, navigate } = props;
  return (
    <SafeAreaView key={place.id}>
      <TouchableHighlight
        onPress={() => {
          navigate('SingleSnap', { userId: user.id, placeId: place.id });
        }}
      >
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.name}>{user.username}</Text>
            {place.category.map(category => handleIcon(category))}
          </View>
          {place.snapshot.photos!== '' ? <Image source={{ uri: place.snapshot.photos }} style={{ width: 225, height: 175 }} /> : null}
          <Text style={styles.title}>{place.name}</Text>
          <Text style={styles.content}>{place.snapshot.description}</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7cac9',
    margin: 15,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f7786b'
  },
  contentContainer: {
    paddingTop: 15
  },
  name: {
    fontSize: 20,
    color: '#f7786b',
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 15,
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#f7786b',
    margin: 10
  },
  content: {
    color: '#f7786b',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    textAlign: 'center'
  },
  topContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40
  }
})
