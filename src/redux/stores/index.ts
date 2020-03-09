import { combineReducers, createStore, applyMiddleware, Action } from 'redux';
import { chatReducer } from './chat/reducers';
import { authReducer } from './auth/reducers';
import { ThunkAction } from 'redux-thunk';

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

const rootReducer = combineReducers({ auth: authReducer, chat: chatReducer });

const configureStore = () => {
	return createStore(rootReducer);
};

const store = configureStore();

export default store;
