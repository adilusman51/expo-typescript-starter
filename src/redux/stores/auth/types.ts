export interface OAuth {
	access_token: string;
	refresh_token: string;
	token_type: string;
	expires_in?: number;
}

export interface AuthState {
	auth: OAuth;
	isLoggedIn: boolean;
	username: string;
}

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

interface LogInAction {
	type: typeof USER_LOG_IN;
	payload: {
		username: string;
		auth: OAuth;
	};
}

interface LogOutAction {
	type: typeof USER_LOG_OUT;
}

export type AuthActionTypes = LogInAction | LogOutAction;
