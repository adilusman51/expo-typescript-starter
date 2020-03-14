module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: [
						'.ios.js',
						'.android.js',
						'.js',
						'.ts',
						'.tsx',
						'.json',
					],
					alias: {
						'@screens': ['./src/screens'],
						'@components': ['./src/components'],
						'@paper': ['./src/paper'],
						'@navigation': ['./src/navigation'],
						'@providers': ['./src/providers'],
						'@utils': ['./src/utils'],
						'@redux-store': ['./src/redux/stores'],
						'@localization': ['./localization'],
					},
				},
			],
		],
	};
};
