/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const First = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Second')}>
        <Text>Push to Second</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;
