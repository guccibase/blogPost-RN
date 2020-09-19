import CreateContext from './CreateContext';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{ id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content }
			];
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

const addBlogPost = (dispatch) => {
	return (title, content, callBack) => {
		dispatch({ type: 'add', payload: { title, content } });
		callBack();
	};
};
const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return (title, content, id, callBack) => {
		dispatch({ type: 'edit', payload: { title, content, id } });
		callBack();
	};
};
export const { Context, Provider } = CreateContext(reducer, { addBlogPost, deleteBlogPost, editBlogPost }, [
	{ title: 'My Post', content: 'My post content', id: 1 }
]);
