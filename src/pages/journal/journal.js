import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
	const arr = [0, 1, 2, 3, 4, 5, 'Зачет'];
	// const lessons = fetch('http://localhost:3005/disciplines').then((response) =>
	// 	response.json(),
	// );
	// console.log(lessons);
	useEffect(() => {
	fetch('http://localhost:3005/students').then((response) =>
		response.json().then((response) => setStudents(response)),
	)},[])
	console.log(students);
	return (
		<div className={className}>
			<h2>Journal</h2>

			<StudentTable>
				<HeaderTable>
					<FIO></FIO>
					{arr.map((value, index) => (
						<Lesson>{value}</Lesson>
					))}
				</HeaderTable>
				{students.map((value, index) => (
					<StudentRow>
						<FIO>{value.FIO}</FIO>
						{arr.map((value, index) => (
							<Lesson>{value}</Lesson>
						))}
					</StudentRow>
				))}
			</StudentTable>
		</div>
	);
};

export const Journal = styled(JournalContainer)``;
