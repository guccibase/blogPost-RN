import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/screens/index';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator(
	{
		Index: Index,
		Show: ShowScreen
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blogs'
		}
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};
