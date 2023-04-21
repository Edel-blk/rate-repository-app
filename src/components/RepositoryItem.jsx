import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = (props) => (
    <View 
        key={props.id}
        style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
    >
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Id: {props.id}</Text>
        <Text>FullName: {props.fullName}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>StargazersCount: {props.stargazersCount}</Text>
        <Text>ForksCount: {props.forksCount}</Text>
        <Text>ReviewCount: {props.reviewCount}</Text>
        <Text>RatingAverage: {props.ratingAverage}</Text>
    </View>
);

export default RepositoryItem;