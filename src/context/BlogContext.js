import CreateContext from './CreateContext';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [ ...state, { id: Math.floor(Math.random() * 9999), title: `BlogPosts ${state.length + 1}` } ];
		case 'delete':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		default:
			return;
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add' });
	};
};
const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete', payload: id });
	};
};
export const { Context, Provider } = CreateContext(reducer, { addBlogPost, deleteBlogPost }, []);
