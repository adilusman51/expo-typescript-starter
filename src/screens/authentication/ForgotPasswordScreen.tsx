import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { AuthNavProps } from '@navigation';
import { AuthContext } from '@providers';
import { Container, Card, TextInput, Button } from '@paper';
import { setInput } from '@utils';
import { Margin } from '@components';

const ForgotPasswordScreen = ({
	navigation,
}: AuthNavProps<'ForgotPassword'>) => {
	const { forgotPassword } = useContext(AuthContext);

	const [username, setUsername] = useState<string>(null);

	const clearInputs = () => {
		setUsername(null);
	};

	const onResetPassword = async () => {
		if (username) {
			try {
				await forgotPassword(username);
			} catch (error) {
				Alert.alert('Error', error.message);
			}
			clearInputs();
		}
	};
	const onSignUp = async () => {
		navigation.navigate('SignUp');
	};
	const onSignIn = async () => {
		navigation.navigate('SignIn');
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
					<Margin margin='xlarge' />
					<Button mode='contained' onPress={onResetPassword}>
						Reset Password
					</Button>
					<Margin />
					<Button onPress={onSignIn}>Sign In</Button>
					{/* <Button onPress={onSignUp}>Sign Up?</Button> */}
				</Card>
			</View>
		</Container>
	);
};

export default ForgotPasswordScreen;
