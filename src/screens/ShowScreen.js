import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const id = state.find(
		(blogPost) => navigation.getParam('id') === blogPost.id,
		() => {
			console.log(blogPost.content);
		}
	);
	return (
		<View>
			<Text>{id.title}</Text>
			<Text>{id.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
				<EvilIcons name="pencil" size={35} />
			</TouchableOpacity>
		)
	};
};

const style = StyleSheet.create({
	icon: {
		color: 'black'
	}
});

export default ShowScreen;
