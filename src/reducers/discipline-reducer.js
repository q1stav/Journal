const initialDisciplineState = {};

export const disciplineReducer = (state = initialDisciplineState, action) => {
	switch (action.type) {
		case 'GET_ALL_INFO': {
			console.log(action.payload);
			return (state = { ...action.payload });
		}

		default:
			return state;
	}
};
