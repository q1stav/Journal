import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FSB from './FSB.png';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 17px;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<img src={FSB} alt="logo" height={120}></img>
		<div>
			<LargeText>
				Голицынский пограничный институт <br /> Федеральной службы безопасности
			</LargeText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -21px;
`;
