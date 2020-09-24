import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Index = ({ navigation }) => {
	const { state, getBlogPosts, deleteBlogPost, addBlogPost } = useContext(Context);

	useEffect(() => {
		getBlogPosts();

		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts();
		});

		return () => {
			listener.remove();
		};
	}, []);

	return (
		<View>
			<Text>Blog Posts</Text>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Show', { id: item.id });
							}}
						>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title}-{item.id}
								</Text>
								<TouchableOpacity
									onPress={() => {
										deleteBlogPost(item.id);
									}}
								>
									<Ionicons style={styles.icon} name="ios-trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

Index.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<AntDesign name="plus" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20
	},
	title: {
		fontSize: 20
	},
	icon: {
		fontSize: 24
	}
});

export default Index;
