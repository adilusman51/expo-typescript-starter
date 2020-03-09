import { AuthActionTypes, OAuth, USER_LOG_OUT, USER_LOG_IN } from './types';

export const logInUser = (username: string, auth: OAuth): AuthActionTypes => ({
	type: USER_LOG_IN,
	payload: { username, auth },
});

export const logOutUser = (): AuthActionTypes => ({ type: USER_LOG_OUT });
