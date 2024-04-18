const initialUsersState = [];

export const studentsReducer = (state = initialUsersState, action) => {
	switch (action.type) {

		case "GET_ALL":{
			return(state=[...action.payload])
		}
		default:
			return state;
	}
};
