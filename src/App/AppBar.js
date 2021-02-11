import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
	font-size: 2.5em;
	font-family: 'Do Hyeon', sans-serif;
`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px;
	margin-bottom: 40px;
	align-items: center;
`;

const ControlButtonElem = styled.div`
	cursor: pointer;
	${props =>
		props.active &&
		css`
			color: blue;
			font-weight: bolder;
			text-shadow: 0px 0px 60px #03ff03;
		`}
`;

function toProperCase(lower) {
	return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name, active }) {
	return <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>;
}

function AppBar() {
	return (
		<Bar>
			<Logo>CryptoDash</Logo>
			<div></div>
			<ControlButton active name="dashBoard" />
			<ControlButton name="settings" />
		</Bar>
	);
}

export default AppBar;
