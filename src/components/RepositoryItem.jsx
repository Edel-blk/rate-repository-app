import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextStyled from './TextStyled';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';


const RepositoryItem = (props) => (
	<View 
	key={props.id}
	style={styles.container}
    >
			<TextStyled fontSize={'subHeading'} fontWeight={'bold'}>{props.fullName}</TextStyled>
			<TextStyled >{props.description}</TextStyled>
			<TextStyled style={styles.language}>{props.language}</TextStyled>
			<RepositoryStats {...props}/>
    </View>
);

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5
	},
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		borderRadius: 4,
		overflow: 'hidden',
	}
});

export default RepositoryItem;