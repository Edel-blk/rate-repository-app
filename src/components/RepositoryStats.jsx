import React from 'react';
import { View } from 'react-native';
import TextStyled from './TextStyled';

const parseThousands = value => {
	return value >= 1000
		? `${Math.round(value / 100) / 10}k`
		: String(value);
}

const RepositoryStats = (props) => {
	 return (
	 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
		<View>
			<TextStyled align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</TextStyled>
			<TextStyled align='center'>Stars</TextStyled>
		</View>
		<View>
			<TextStyled align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</TextStyled>
			<TextStyled align='center'>Forks</TextStyled>
		</View>
		<View>
			<TextStyled align='center' fontWeight='bold'>{parseThousands(props.reviewCount)}</TextStyled>
			<TextStyled align='center'>Review</TextStyled>
		</View>
		<View>
			<TextStyled align='center' fontWeight='bold'>{parseThousands(props.ratingAverage)}</TextStyled>
			<TextStyled align='center'>Rating</TextStyled>
		</View>
	</View>
	);
}

export default RepositoryStats;