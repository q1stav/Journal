import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getAll, getDisciplineInfo } from '../../actions';

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
	const [students, setStudents] = useState([]);
	const [discipline, setDiscipline] = useState({ Lessons: [1] });
	const arr = [0, 1, 2, 3, 4, 5, 'Зачет'];

	useEffect(() => {
		fetch('http://localhost:3005/disciplines/001')
			.then((response) => response.json())
			.then((response) => {
				setDiscipline(response);
				console.log(response);
				// dispatch(getDisciplineInfo(response));
			});
	}, []);

	useEffect(() => {
		fetch('http://localhost:3005/students')
			.then((response) => response.json())
			.then((response) => {
				setStudents(response);
				console.log(response);
				// dispatch(getAll(response));
			});
	}, []);

	return (
		<div className={className}>
			<h2>{discipline.name}</h2>

			<StudentTable key={'000002'}>
				<HeaderTable>
					<FIO></FIO>
					{discipline.Lessons.map((value, index) => (
						<Lesson>{value.title}</Lesson>
					))}
				</HeaderTable>
				{students.map((student, index) => (
					<StudentRow>
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
