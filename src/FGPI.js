import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Journal } from './pages';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1800px;
	min-height: 100%;
	background-color: white;
	margin: 0 auto;
`;

export const FGPI = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>1111</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<Journal />} />
					<Route path="/post/:post_id" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
		</AppColumn>
	);
};
