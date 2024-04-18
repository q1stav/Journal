import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';


const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
const StyledLogoutIcon = styled.div`
	margin: 0 0 10px 10px;
	&:hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<RightAligned>
						<StyledIcon>
							<Icon
								id="fa-sign-out"
								margin="0 0 0 10px"
							/>
						</StyledIcon>


			</RightAligned>
			<RightAligned>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyledIcon>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
