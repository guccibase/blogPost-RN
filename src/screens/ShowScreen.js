import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const id = state.find((blogPost) => navigation.getParam('id') === blogPost.id);
	return (
		<View>
			<Text>{id.title}</Text>
		</View>
	);
};

const style = StyleSheet.create({});

export default ShowScreen;
