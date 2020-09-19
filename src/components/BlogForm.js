import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const BlogForm = ({ initialValues, onSubmit }) => {
	const [ title, setTitle ] = useState(initialValues.title);
	const [ content, setContent ] = useState(initialValues.content);
	return (
		<View style={style.view}>
			<Text style={style.lable}>Enter TItle: </Text>
			<TextInput value={title} style={style.input} onChangeText={(titleText) => setTitle(titleText)} />
			<Text style={style.lable}>Enter Content: </Text>
			<TextInput value={content} style={style.input} onChangeText={(contentText) => setContent(contentText)} />
			<Button title="save post" onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogForm.defaultProps = {
	initialValues: { title: '', content: '' }
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

export default BlogForm;
