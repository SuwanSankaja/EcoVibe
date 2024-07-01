import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useTheme } from 'react-native-elements';

const ProfileScreen = () => {
  const { theme } = useTheme();

  // Example user profile data
  const userProfile = {
    name: 'Suwan Sankaja',
    email: 'suwan.sankaja@gmail.com',
    age: 25,
    location: 'Colombo, Sri Lanka',
    bio: 'Passionate about environmental sustainability.',
    profilePic: require('../assets/pro_pic.jpeg'), // Example image import
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>User Profile</Text>
        
        <Image source={userProfile.profilePic} style={styles.profilePic} />

        <View style={styles.card}>
          <DetailRow label="Name" value={userProfile.name} />
          <DetailRow label="Email" value={userProfile.email} />
          <DetailRow label="Age" value={userProfile.age} />
          <DetailRow label="Location" value={userProfile.location} />
          <DetailRow label="Bio" value={userProfile.bio} />
        </View>
      </View>
    </ScrollView>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.profileDetail}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'white',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
    fontSize: 16,
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
});

export default ProfileScreen;
