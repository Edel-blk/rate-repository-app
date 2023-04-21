import React from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../data/repositories';

const RepositoryList = () => {
  return(
    <View>
      <FlatList
        data={repositories}
        renderItem={({item}) => (
          <View key={item.id}>
            <Text>{item.id}</Text>
            <Text>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.language}</Text>
            <Text>{item.stargazersCount}</Text>
            <Text>{item.forksCount}</Text>
            <Text>{item.reviewCount}</Text>
            <Text>{item.rating}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default RepositoryList;