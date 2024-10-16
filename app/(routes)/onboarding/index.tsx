/** @format */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OnBoardingScreen from '@/screens/OnBoardingScreen';

const OnBoardRoot = () => {
  return (
    <View style={styles.container}>
      <OnBoardingScreen />
    </View>
  );
};

export default OnBoardRoot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
