import React, { useState } from 'react';
import { View } from 'react-native';

import Navigation from '~navigator';
import Network from '~components/Network';

const Index = () => {
  const [skipScreen, setSkipScreen] = useState('default');
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
       <Network />
       <Navigation skipScreen={skipScreen} />
    </View>
  );
};

export default Index;
