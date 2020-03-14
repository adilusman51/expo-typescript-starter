import React, { useContext, useState } from 'react';
import { View, Alert } from 'react-native';

import { AuthContext } from '@providers';
import { AuthNavProps } from '@navigation';
import { TextInput, Container, Button, Card } from '@paper';
import { setInput } from '@utils';
import { Margin } from '@components';

const SignInScreen = ({ navigation }: AuthNavProps<'SignIn'>) => {
	const { signIn } = useContext(AuthContext);

	const [username, setUsername] = useState<string>(null);
	const [password, setPassword] = useState<string>(null);

	const clearInputs = () => {
		setUsername(null);
		setPassword(null);
	};

	const onSignIn = async () => {
		try {
			await signIn(username, password);
		} catch (error) {
			Alert.alert('Error', error.message);
			clearInputs();
		}
	};
	const onForgotPassword = async () => {
		navigation.navigate('ForgotPassword');
	};
	const onSignUp = async () => {
		navigation.navigate('SignUp');
	};
	return (
		<Container>
			<View
				style={{
					flex: 1,
					marginHorizontal: 24,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Card style={{ width: '90%', padding: 16 }}>
					<TextInput
						label='Username'
						placeholder='username'
						value={username}
						onChange={setInput(setUsername)}
					/>
					<TextInput
						label='Password'
						placeholder='password'
						value={password}
						onChange={setInput(setPassword)}
						secureTextEntry
					/>
					<Margin margin='xlarge' />
					<Button mode='contained' onPress={onSignIn}>
						Sign In
					</Button>
					<Margin />
					<Button onPress={onSignUp}>Sign Up</Button>
					<Button onPress={onForgotPassword}>Forgot Password?</Button>
				</Card>
			</View>
		</Container>
	);
};

export default SignInScreen;
