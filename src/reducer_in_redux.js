

// reducer function takes the previous state, action being dispatched as an argument and returns next state;

/*
function(state = 0,action){

	if(action.type === 'INCREMENT'){
		return state + 1;
	}
	else if(action.type === 'DECREMENT'){
		return state - 1;
	}
	else{
		return state;
	}
}
*/

const Counter = (state = 0,action) => {

	switch(action.type) {
		case 'INCREMENT':
			return state + 1
			break;

		case 'DECREMENT':
			return state - 1
			break;

		default:
			return state;
	}

}

export default Counter;


/*
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}
*/


