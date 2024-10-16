/** @format */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from '@/screens/HomeScreen';

const index = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
