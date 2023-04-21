import React from 'react';
import Constants from 'expo-constants';
import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList.jsx';

export default function main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList/>
    </View>
  )
}