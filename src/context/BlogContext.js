import CreateContext from './CreateContext';
import jsonServer from '../api/jsonServer';

const reducer = (state, action) => {
	switch (action.type) {
		case 'get':
			return action.payload;

		case 'delete':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		case 'edit':
			return state.map((blogPost) => {
				return blogPost.id === action.payload.id ? action.payload : blogPost;
			});
		default:
			return;
	}
};

const getBlogPosts = (dispatch) => {
	return async () => {
		const response = await jsonServer.get('/blogposts');
		dispatch({ type: 'get', payload: response.data });
	};
};
const addBlogPost = (dispatch) => {
	return async (title, content, callBack) => {
		await jsonServer.post('/blogposts', { title, content });

		callBack();
	};
};
const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogposts/${id}`);
		dispatch({ type: 'delete', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return async (title, content, id, callBack) => {
		await jsonServer.put(`/blogposts/${id}`, { title, content });
		dispatch({ type: 'edit', payload: { title, content, id } });
		callBack();
	};
};
export const { Context, Provider } = CreateContext(
	reducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[]
);
