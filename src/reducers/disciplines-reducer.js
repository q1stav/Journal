const initialDisciplinesState={
	"id": "",
 	 "name": "",
  	"lessons": [ {
		"id": "",
		"title": "",
		"date": ""
  },
]
}

export const disciplinesReducer=(state=initialDisciplinesState, action)=>{
	switch (action.type){
		case "GET_DISCIPLINE_INFO":{
			return {...action.payload}
		}

		default:
			return state;
	}
}
