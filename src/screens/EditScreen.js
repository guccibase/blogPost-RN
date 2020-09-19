import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({ navigation }) => {
	const { state, editBlogPost } = useContext(Context);

	const blogPost = state.find((blog) => navigation.getParam('id') === blog.id);
	const id = blogPost.id;

	return (
		<BlogForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(title, content, id, () => navigation.pop());
			}}
		/>
	);
};

const style = StyleSheet.create({});

export default EditScreen;
