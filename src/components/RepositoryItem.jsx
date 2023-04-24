import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextStyled from './TextStyled';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5
	},
});

const parseThousands = value => {
	return value >= 1000
		? `${Math.round(value / 100) / 10}k`
		: String(value);
}

const RepositoryStats = (props) => {
	 return (
	 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
		<View>
			<TextStyled align='center' fontWeight='bold'>Stars</TextStyled>
			<TextStyled align='center'>{parseThousands(props.stargazersCount)}</TextStyled>
		</View>
		<View>
			<TextStyled align='center' fontWeight='bold'>Forks</TextStyled>
			<TextStyled align='center'>{parseThousands(props.forksCount)}</TextStyled>
		</View>
		<View>
			<TextStyled align='center' fontWeight='bold'>Review</TextStyled>
			<TextStyled align='center'>{parseThousands(props.reviewCount)}</TextStyled>
		</View>
		<View>
			<TextStyled align='center' fontWeight='bold'>Rating</TextStyled>
			<TextStyled align='center'>{parseThousands(props.ratingAverage)}</TextStyled>
		</View>
	</View>
	);
}

const RepositoryItem = (props) => (
    <View 
        key={props.id}
        style={styles.container}
    >
			<TextStyled fontSize={'subHeading'} fontWeight={'bold'}>{props.fullName}</TextStyled>
			<TextStyled >{props.description}</TextStyled>
			<TextStyled >{props.language}</TextStyled>
			<RepositoryStats {...props}/>
    </View>
);

export default RepositoryItem;