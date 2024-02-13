import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants';


const initialUsersState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null,
};

export const usersReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};
