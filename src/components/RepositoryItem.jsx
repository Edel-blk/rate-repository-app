import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextStyled from './TextStyled';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5
	},
})
const RepositoryItem = (props) => (
    <View 
        key={props.id}
        style={styles.container}
    >
        <TextStyled big bold>Id: {props.id}</TextStyled>
        <TextStyled bold>FullName: {props.fullName}</TextStyled>
        <TextStyled blue>Description: {props.description}</TextStyled>
        <TextStyled bold>Language: {props.language}</TextStyled>
        <TextStyled small>StargazersCount: {props.stargazersCount}</TextStyled>
        <TextStyled small>ForksCount: {props.forksCount}</TextStyled>
        <TextStyled small>ReviewCount: {props.reviewCount}</TextStyled>
        <TextStyled small>RatingAverage: {props.ratingAverage}</TextStyled>
    </View>
);

export default RepositoryItem;