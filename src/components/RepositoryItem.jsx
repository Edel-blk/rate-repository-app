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
        <TextStyled fontSize={'subHeading'} fontWeight={'bold'}>{props.fullName}</TextStyled>
        <TextStyled >{props.description}</TextStyled>
        <TextStyled >{props.language}</TextStyled>
        <TextStyled >StargazersCount: {props.stargazersCount}</TextStyled>
        <TextStyled >ForksCount: {props.forksCount}</TextStyled>
        <TextStyled >ReviewCount: {props.reviewCount}</TextStyled>
        <TextStyled >RatingAverage: {props.ratingAverage}</TextStyled>
    </View>
);

export default RepositoryItem;