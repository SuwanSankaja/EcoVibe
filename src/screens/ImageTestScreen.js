import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Import local images
import ecoFriendlyImage from '../assets/eco-friendly.jpg';
import eventsImage from '../assets/events.jpg';
import recyclingGuideImage from '../assets/recycling-guide.jpeg';
import greenTipsImage from '../assets/green-tips.jpeg';
import communityChallengesImage from '../assets/community-challenges.png';
import campusMapImage from '../assets/campus-map.jpg';

const ImageTestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Test Screen</Text>

      <Image source={ecoFriendlyImage} style={styles.image} />
      <Image source={eventsImage} style={styles.image} />
      <Image source={recyclingGuideImage} style={styles.image} />
      <Image source={greenTipsImage} style={styles.image} />
      <Image source={communityChallengesImage} style={styles.image} />
      <Image source={campusMapImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default ImageTestScreen;
