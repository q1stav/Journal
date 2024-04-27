export const getDisciplineInfo=(dispatch)=>
	fetch('http://localhost:3005/disciplines/001')
		.then((response)=>response.json())
		.then((disciplineDataFromServer)=>
			dispatch({
				type:'GET_DISCIPLINE_INFO',
				payload: disciplineDataFromServer
		})
	)
