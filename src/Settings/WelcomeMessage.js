import React from 'react';
import { AppContext } from '../App/AppProvider';

const WelcomeMessage = ({ firstVisit }) => {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) => (firstVisit ? <h2>Welcome To CryptoDash! Please select your favourite coins to begin.</h2> : null)}
		</AppContext.Consumer>
	);
};

export default WelcomeMessage;
