import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { AppLoading } from 'expo';
import * as Updates from 'expo-updates';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { AppNavigator } from '@navigation';

import { Providers } from '@providers';

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	const checkForUpdates = async () => {
		try {
			const update = await Updates.checkForUpdateAsync();
			if (update.isAvailable) {
				await Updates.fetchUpdateAsync();
				// ... notify user of update ...
				Alert.alert(
					'App Update',
					'New version of this App is available.',
					[
						{
							text: 'Reload',
							onPress: () => Updates.reloadAsync(),
						},
					],
					{ cancelable: false }
				);
			}
		} catch (e) {
			// handle or log error
			console.log(e);
		}
	};

	useEffect(() => {
		if (__DEV__) return;
		checkForUpdates();
		// return () => {
		// 	cleanup
		// }
	}, []);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		return (
			<Providers>
				<AppNavigator />
			</Providers>
		);
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./src/assets/images/robot-dev.png'),
			require('./src/assets/images/robot-prod.png'),
		]),
		Font.loadAsync({
			// This is the font that we are using for our tab bar
			...Ionicons.font,
			// We include SpaceMono because we use it in HomeScreen.js. Feel free to
			// remove this if you are not using it in your app
			'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
		}),
	]);
}

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
