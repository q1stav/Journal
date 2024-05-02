import { fillAllStudents } from "../actions"

export const fetchStudents=()=>{
	return dispatch=>{
	fetch('http://localhost:3005/students')
		.then((response)=>response.json())
		.then((studentsDataFromServer)=>
			dispatch(fillAllStudents(studentsDataFromServer)))}
	}