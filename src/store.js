import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {studentReducer,studentsReducer,disciplineReducer,disciplinesReducer} from './reducers';

const reducer = combineReducers({
	student: studentReducer,
	students: studentsReducer,
	discipline: disciplineReducer,
	disciplines: disciplinesReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
