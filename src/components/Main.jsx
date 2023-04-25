import React from 'react';
import Constants from 'expo-constants';
import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';

export default function main() {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar/>
      <RepositoryList/>
    </View>
  )
}