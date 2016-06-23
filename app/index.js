
/*
import React, { Component } from "react";
import ReactDOM from "react-dom";

import ListClients from "./components/ListClientsCol";
import {data} from "./json.js";
*/
//import {combineReducers, createStore} from "redux";
import myfunc from "../WS/init"

myfunc();
/*
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

let usersReducer = function(state=0, action){
	return state
};

let helloReducer = function(state={}, action){
	return state;
};

let reducer = combineReducers({
	users: usersReducer,
	hello: helloReducer

});


let store = createStore(usersReducer);


store.subscribe(()=>{
	console.log("store changed ", store.getState())
})




store.dispatch({type: "INC", change: 1})
/*
console.log(data);

const app = document.getElementById('app');

ReactDOM.render(<ListClients users={data}/>, app);
*/