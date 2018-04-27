

import React from 'react';
import ReactDom from 'react-dom';

const Decrement = (props) => {

	return(
		<div>
			<button onClick = {props.onClick}> - </button>
		</div>
	)
}

export default Decrement;