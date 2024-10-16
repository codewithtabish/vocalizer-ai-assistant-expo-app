/** @format */

import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import OnBoardingOne from '@/components/OnBoardSvgImage';
import { onBoardData } from '@/constants/onBoardData';
import { OnBoardingInterface } from '@/types';
import { scale, verticalScale } from 'react-native-size-matters';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
const bottomBoxWidth = width * 0.8;
const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<any>();
  const handleScroll = (evenet: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = evenet.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(
      x / evenet.nativeEvent.layoutMeasurement.width
    );
    setActiveIndex(currentIndex);
  };
  const handlePressSkip = async () => {
    console.log('yes');
    const nextIndex = activeIndex + 1;
    if (nextIndex < onBoardData.length) {
      scrollRef?.current.scrollTo({
        x: nextIndex * width,
        // y:0,
        animated: true,
      });
      setActiveIndex(nextIndex);
    } else {
      await AsyncStorage.setItem('onBoarding', 'true');
      router.push('(routes)/home');
    }
  };
  return (
    <LinearGradient
      colors={['#250125', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.topContainer}
        onPress={handlePressSkip}
      >
        <View style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip</Text>
          <AntDesign
            name='arrowright'
            size={18}
            color='white'
          />
        </View>
      </TouchableOpacity>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {onBoardData.map((item: OnBoardingInterface, index: number) => {
          return (
            <View
              key={index}
              style={styles.slide}
            >
              {item.image}
              <View style={styles.bottomContainer}>
                <Text style={styles.titleStyle}>{item?.title}</Text>
                <Text style={styles.subTitleStype}>{item?.subTitle}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {onBoardData?.map((_, index: number) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  opacity: activeIndex === index ? 1 : 0.5,
                },
              ]}
            ></View>
          );
        })}
      </View>
      {/* <OnBoardingOne /> */}
      <StatusBar barStyle={'light-content'} />
    </LinearGradient>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  titleStyle: {
    color: '#fff',
    fontSize: scale(24),
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'SegeoUI',
  },
  subTitleStype: {
    width: scale(250),
    color: '#9A9999',
    marginHorizontal: 'auto',
    textAlign: 'center',
    fontFamily: 'SegeoUI',
    fontSize: scale(14),
    // marginTop: scale(15),
    fontWeight: '400',
    paddingTop: verticalScale(15),
  },
  bottomContainer: {
    width: bottomBoxWidth,
    marginTop: scale(10),
  },
  paginationContainer: {
    position: 'absolute',
    bottom: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(7),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    backgroundColor: '#fff',
    // marginHorizontal: scale(5),
  },
  topContainer: {
    position: 'absolute',
    top: verticalScale(40),
    right: scale(20),
    zIndex: 5,
  },
  skipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
    justifyContent: 'center',
    // zIndex: 1,
  },
  skipText: {
    color: 'white',
    fontFamily: 'SegeoUI',
    fontSize: scale(14),
    // fontWeight: '500',
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
