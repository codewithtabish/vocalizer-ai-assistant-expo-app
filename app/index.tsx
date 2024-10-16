/** @format */

import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [isOnBoarding, setIsOnBoarding] = useState(true);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const checkOnBoard = async () => {
      const isBoard = await AsyncStorage.getItem('onBoarding');
      if (isBoard) {
        setIsOnBoarding(false);
      }
      setloading(false);
    };
    checkOnBoard();

    return () => {};
  }, []);

  if (loading)
    return (
      <Text style={{ color: '#ff0000' }}>
        This is being loaded please while
      </Text>
    );

  return (
    <Redirect href={isOnBoarding ? '/(routes)/onboarding' : '/(routes)/home'} />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
