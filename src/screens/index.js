import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const Index = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);
	return (
		<View>
			<Text>Blog Posts</Text>
			<Button title="Add post" onPress={addBlogPost} />
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
