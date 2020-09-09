import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const { addBlogPost } = useContext(Context);
	return (
		<View style={style.view}>
			<Text style={style.lable}>Enter TItle: </Text>
			<TextInput style={style.input} onChangeText={(titleText) => setTitle(titleText)} />
			<Text style={style.lable}>Enter Content: </Text>
			<TextInput style={style.input} onChangeText={(contentText) => setContent(contentText)} />
			<Button
				title="Add post"
				onPress={() => {
					addBlogPost(title, content);
					navigation.pop();
				}}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	view: {
		padding: 5
	},
	lable: {
		padding: 10,
		fontSize: 20
	},
	input: {
		padding: 10,
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black'
	}
});

export default CreateScreen;
