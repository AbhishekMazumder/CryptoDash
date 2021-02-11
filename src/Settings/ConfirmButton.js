import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { fontSize2, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
	margin: 20px;
	color: ${color3};
	${fontSize2};
	border: 3px green solid;
	padding:10px 15px;
	cursor: pointer;
	border-radius: 60px;
	&:hover {
		${greenBoxShadow};
		transition: all 0.3s linear;
	}
`;

export const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

export default function () {
	return (
		<AppContext.Consumer>
			{({ confirmFavourites }) => (
				<CenterDiv>
					<ConfirmButtonStyled onClick={confirmFavourites}>
						Confirm Favourites
					</ConfirmButtonStyled>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
}
