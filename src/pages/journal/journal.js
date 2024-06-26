import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { useState, useEffect, } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fillAllStudents, getDisciplineInfo} from '../../actions';
import { selectLessons, selectStudents } from '../../selectors';
import { fetchDiscipline } from '../../Async-actions/get-async-discipline-info';
import { fetchStudents } from '../../Async-actions/get-async-students-info';

const HeaderTable = styled.div`
	display: flex;
	flex-direction: row;
	width: 95%;
	height: 65px;
	border-radius: 15px;
	margin-bottom: 30px;
`;

const StudentTable = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: 750px;
`;

const StudentRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 95%;
	height: 65px;
`;

const FIO = styled.div`
	padding-left: 10px;
	min-width: 330px;
	height: 100%;
	font-size: 25px;
	border-radius: 10px;
	border: 5px solid white;
	background-color: #f2f2f2;
`;

const Lesson = styled.div`
	border-radius: 10px;
	height: 65px;
	width: 190px;
	border: 5px solid white;
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const JournalContainer = ({ className }) => {
	const dispatch=useDispatch();



	useEffect(() => {
				dispatch(fetchStudents())
				dispatch(fetchDiscipline());

	  },[]);
console.log('render');

const lessons=useSelector(selectLessons)
const students=useSelector(selectStudents)

console.log(lessons);
console.log(students);


	return (
		<div className={className}>
			<h2>"ДИСЦИПЛИНА"</h2>

			<StudentTable >
				<HeaderTable>
					<FIO></FIO>
					{lessons.map((value, index) => (
						<Lesson key={value.id}>{value.title}</Lesson>
					))}
				</HeaderTable>
				{students.map((student, index) => (
					<StudentRow key={student.id}>
						<FIO>{student.FIO}</FIO>
						{student.marks.map((value, index) => (
							<Lesson>{value.mark}</Lesson>
						))}
					</StudentRow>
				))}
			</StudentTable>
		</div>
	);
};

export const Journal = styled(JournalContainer)``;
