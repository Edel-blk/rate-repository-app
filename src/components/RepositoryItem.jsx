import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import TextStyled from './TextStyled';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHeader = (props) => {
	return (
		<View style={{ flexDirection: 'row', paddingBottom: 2 }}>
			<View style={{ paddingRight: 10 }}>
				<Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}/>
			</View>
			<View style={{ flex: 1 }}>
				<TextStyled fontWeight='bold'>{props.fullName}</TextStyled>
				<TextStyled color='secondary'>{props.description}</TextStyled>
				<TextStyled style={styles.language}>{props.language}</TextStyled>
			</View>
		</View>
	);
}


const RepositoryItem = (props) => (
	<View 
	key={props.id}
	style={styles.container}
    >
			<RepositoryItemHeader {...props}/>
			<RepositoryStats {...props}/>
    </View>
);

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5,
	},
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		borderRadius: 4,
		overflow: 'hidden',
		marginVertical: 4,
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4,
	}
});

export default RepositoryItem;