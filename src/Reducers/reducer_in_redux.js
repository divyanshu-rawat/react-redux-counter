

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


const initialState = {
  count: 0
};

// let ne_O = Object.assign({},{ count: 'abcd'});
// console.log(ne_O);

console.log('Intial State',initialState.count);

const Counter = (state = initialState,action) => {

	switch(action.type) {
		case 'INCREMENT':
			return Object.assign({},{ count: state.count  + 1});
			break;

		case 'DECREMENT':
			return Object.assign({},{ count: state.count  - 1});
			break;

		default:
			return Object.assign({},{ count: state.count });;
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


