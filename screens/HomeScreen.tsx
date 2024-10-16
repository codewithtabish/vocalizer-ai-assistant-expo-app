/** @format */

import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#250152', '#000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.topContainer}
    >
      <StatusBar barStyle={'light-content'} />
      {/* BACK SHADOW */}
      <Image
        source={require('@/assets/main/blur.png')}
        style={styles.backImage}
      />
      <Image
        source={require('@/assets/main/purple-blur.png')}
        style={styles.backImageLeft}
      />
      <View style={{ marginTop: verticalScale(15) }}>
        <TouchableOpacity
          style={{
            width: scale(100),
            height: scale(100),
            backgroundColor: 'white',
            borderRadius: scale(100),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome
            name='microphone'
            size={scale(60)}
            color={'gray'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: verticalScale(90),
          width: scale(350),
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: scale(16),
            fontWeight: '500',
            textAlign: 'center',
            fontFamily: 'SegeoUI',
            lineHeight: scale(25),
            width: scale(269),
          }}
        >
          press the microphone to start recording!
        </Text>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    position: 'absolute',
    right: scale(-15),
    top: 0,
    width: scale(240),
  },
  backImageLeft: {
    position: 'absolute',
    left: scale(-15),
    bottom: verticalScale(100),
    width: scale(210),
  },
});
