import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, StyleSheet, Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import RNRestart from 'react-native-restart';

const { width } = Dimensions.get('window');

const Network = () => {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(false);
  const isConnectedRef = useRef(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const currentStatus = state.isConnected;

      if (currentStatus === isConnectedRef.current) return;

      isConnectedRef.current = currentStatus;

      if (!currentStatus) {
        showBanner();
      } else {
        hideBanner(() => {
          RNRestart.Restart();
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const showBanner = () => {
    setIsVisible(true);
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideBanner = (callback?: () => void) => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      if (callback) callback();
    });
  };

  if (!isVisible) return null;

  return (
    <Animated.View style={[styles.banner, { opacity: opacityAnim }]}>
      <Text style={styles.bannerText}>Mất kết nối internet</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',          // Canh giữa theo chiều ngang
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    borderRadius: 12,
    elevation: 10,
    paddingHorizontal: 20,        // Tạo khoảng cách 2 bên text
    paddingVertical: 10,          // Tạo chiều cao
    minHeight: 30,                // Đảm bảo chiều cao tối thiểu
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Network;
