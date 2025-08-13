import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Languages from '~components/languages/LanguageSwitcher';

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
      <Languages />
      <Text style={{ fontSize: 30 }}>Splash Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('dangNhap')} />
    </View>
  );
};

export default Index;
