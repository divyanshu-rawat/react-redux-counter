import React from 'react';
import ReactDom from 'react-dom';


//pure functions

let items = [1,2,3,4];
console.log(square_arr(items));

// it return new arr using items.map
function square_arr(items){
	items.map((item)=>{
		return item*item;
	});
};



// impure functions 

function square(item){
	return item*item;
}

// overwrite values

function square_all(items){
	for(let i=0;i<items.length;i++){
		items[i] = square(items[i]);
	}
}