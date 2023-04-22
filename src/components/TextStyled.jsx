import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	text:{
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeigths.normal,
	},
	colorPrimary: {
		color: theme.colors.primary
	},
	colorSecondary: {
		color: theme.colors.textSecondary
	},
	bold: {
		fontWeight: theme.fontWeigths.bold,
	},
	subHeading: {
		fontSize: theme.fontSizes.subHeading,
	},
});

export default function TextStyled ({ children, color, fontSize, fontWeight, style, ...restOfProps}) {
	const textStyles = [
		styles.text,
		color === 'primary' && styles.colorPrimary,
		color === 'secondary' && styles.colorSecondary,
		fontSize === 'subHeading' && styles.subHeading,
		fontWeight === 'bold' && styles.bold,
	]

	return (
		<Text style={textStyles} {...restOfProps}>
			{children}
		</Text>
	)
}