import { getDisciplineInfo } from "../actions"

export const fetchDiscipline=()=>{
	return dispatch=>{
	fetch('http://localhost:3005/disciplines/001')
		.then((response)=>response.json())
		.then((disciplineDataFromServer)=>
			dispatch(getDisciplineInfo(disciplineDataFromServer)))}
	}
