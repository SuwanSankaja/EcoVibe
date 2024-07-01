import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-elements';
import { Circle } from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example: Using FontAwesome icons

const ChallengeScreen = () => {
  const { theme } = useTheme();

  // Sample challenge data with icons
  const challenges = [
    { id: 1, title: 'Reduce Plastic Use', progress: 70, icon: 'recycle' },
    { id: 2, title: 'Use Public Transport', progress: 40, icon: 'bus' },
    { id: 3, title: 'Plant Trees', progress: 60, icon: 'tree' },
    { id: 4, title: 'Conserve Water Usage', progress: 50, icon: 'tint' },
    { id: 5, title: 'Switch to Renewable Energy', progress: 30, icon: 'sun-o' },
    { id: 6, title: 'Reduce Food Waste', progress: 65, icon: 'cutlery' },
    { id: 7, title: 'Promote Local & Seasonal Food', progress: 55, icon: 'apple' },
    { id: 8, title: 'Recycle Electronics', progress: 45, icon: 'laptop' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>Eco Challenges</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {challenges.map(challenge => (
          <View key={challenge.id} style={styles.challengeContainer}>
            <View style={styles.challengeInfo}>
              <Icon name={challenge.icon} size={30} color={theme.colors.primary} style={styles.icon} />
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
            </View>
            <Circle
              progress={challenge.progress / 100}
              size={60} // Adjusted size to make circles smaller
              thickness={6} // Adjusted thickness for smaller circles
              color={theme.colors.primary}
              style={styles.progressCircle}
              showsText
              formatText={() => `${challenge.progress}%`}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  challengeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderRadius: 10,
  },
  challengeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  challengeTitle: {
    fontSize: 18,
    flex: 1,
  },
  progressCircle: {
    marginLeft: 10,
  },
});

export default ChallengeScreen;
