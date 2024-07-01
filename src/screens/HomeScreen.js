import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useTheme } from 'react-native-elements';

// Import local images
import ecoFriendlyImage from '../assets/eco-friendly.jpg';
import eventsImage from '../assets/events.jpg';
import recyclingGuideImage from '../assets/recycling-guide.jpeg';
import greenTipsImage from '../assets/green-tips.jpeg';
import communityChallengesImage from '../assets/community-challenges.png';
import campusMapImage from '../assets/campus-map.jpg';

const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={ecoFriendlyImage}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <Text style={[styles.title, { color: theme.colors.primary }]}>Eco-Friendly Campus Assistant</Text>
          <Text style={styles.subtitle}>Welcome! Let's make our campus greener together.</Text>
        </View>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Key Features:</Text>

          {/* Events and Campaigns */}
          <View style={styles.feature}>
            <Image
              source={eventsImage}
              style={styles.featureImage}
              resizeMode="cover"
            />
            <Text style={styles.featureText}>
              Events and Campaigns: Stay updated on sustainability events and workshops.
            </Text>
          </View>

          {/* Recycling Guide */}
          <View style={styles.feature}>
            <Image
              source={recyclingGuideImage}
              style={styles.featureImage}
              resizeMode="cover"
            />
            <Text style={styles.featureText}>
              Recycling Guide: Locate recycling stations and learn what's recyclable.
            </Text>
          </View>

          {/* Green Tips */}
          <View style={styles.feature}>
            <Image
              source={greenTipsImage}
              style={styles.featureImage}
              resizeMode="cover"
            />
            <Text style={styles.featureText}>
              Green Tips: Access articles on reducing carbon footprint and conserving resources.
            </Text>
          </View>

          {/* Community Challenges */}
          <View style={styles.feature}>
            <Image
              source={communityChallengesImage}
              style={styles.featureImage}
              resizeMode="cover"
            />
            <Text style={styles.featureText}>
              Community Challenges: Engage in friendly competitions for sustainable habits.
            </Text>
          </View>

          {/* Campus Map */}
          <View style={styles.feature}>
            <Image
              source={campusMapImage}
              style={styles.featureImage}
              resizeMode="cover"
            />
            <Text style={styles.featureText}>
              Campus Map: Find eco-friendly landmarks and green spaces on campus.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0', // Background color for the scroll view
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#757575',
  },
  featuresContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feature: {
    marginBottom: 20,
  },
  featureImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
