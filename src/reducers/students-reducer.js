const initialStudentsState = [{
	"id": "",
	"FIO": "",
	"marks": [
		{ "lesson_id": "", "mark": "" }
	]
}];

export const studentsReducer = (state = initialStudentsState, action) => {
	switch (action.type) {

		case "FILL_ALL_STUDENTS":{
			return [...state,
			...action.payload]
		}
		default:
			return state;
	}
};
