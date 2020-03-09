import { AuthState, AuthActionTypes, USER_LOG_IN, USER_LOG_OUT } from './types';

const initialState: AuthState = {
	isLoggedIn: false,
	username: null,
	auth: null,
};

export const authReducer = (
	state = initialState,
	action: AuthActionTypes
): AuthState => {
	switch (action.type) {
		case USER_LOG_IN:
			return {
				username: action.payload.username,
				auth: action.payload.auth,
				isLoggedIn: true,
			};
		case USER_LOG_OUT:
			return initialState;
		default:
			return state;
	}
};
