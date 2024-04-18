const initialStudentState = {
	id: null,
	FIO: null,
	marks: [],
};

export const studentReducer = (state = initialStudentState, action) => {
	switch (action.type) {
		case 'GET_STUDENT_MARKS':
			return

		default:
			return state;
	}
};
