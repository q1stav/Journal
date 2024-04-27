export const fillAllStudents=(dispatch)=>
	fetch('http://localhost:3005/students')
		.then((response)=>response.json())
		.then((studentsDataFromServer)=>
			dispatch({
				type:'FILL_ALL_STUDENTS',
				payload: studentsDataFromServer
		})
	)

