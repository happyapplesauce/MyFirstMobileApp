import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const BiographyPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionContent}>
          I'm a passionate mobile application developer with expertise in React Native and Expo. I love building beautiful and user-friendly apps that solve real-world problems.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionContent}>
          - Developed several mobile applications for clients in various industries.
          {"\n"}
          - Worked as a freelance developer for 5+ years, delivering high-quality solutions on time and within budget.
          {"\n"}
          - Contributed to open-source projects and collaborated with developers worldwide.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>
          - React Native, Expo
          {"\n"}
          - JavaScript, TypeScript
          {"\n"}
          - UI/UX Design
          {"\n"}
          - RESTful APIs, GraphQL
          {"\n"}
          - Firebase, MongoDB
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.sectionContent}>
          Email: example@email.com
          {"\n"}
          Phone: +1234567890
          {"\n"}
          LinkedIn: linkedin.com/in/example
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
});

export default BiographyPage;
