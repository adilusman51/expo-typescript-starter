import { logInUser } from '../stores/auth/actions';
import { AppThunk } from '../stores';

export const authenticateUser = (
	username: string,
	password: string
): AppThunk => async dispatch => {
	const response = await apiCall(username, password);
	dispatch(logInUser(response.username, response.auth));
};

const apiCall = (username: string, password: string) => {
	return Promise.resolve({
		username: username,
		auth: {
			access_token: 'hello',
			refresh_token: 'bello',
			expires_in: 99,
			token_type: 'bearer',
		},
	});
};
