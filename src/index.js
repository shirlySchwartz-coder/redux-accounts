import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//1
import { combineReducers,createStore } from "redux";



function accountsReducer(state= [],action) {   
    //console.log(action);
    return state;
  }

function usersReducer(state= [],action) {   
  //console.log(action);
  return state;
}
function counterUserReducer(state= Number,action) {   
    //console.log(action);
    return state;
}
function counterBankReducer(state= Number,action) {   
    //console.log(action);
    return state;
}

const allReducers=combineReducers({
    bank_accounts: accountsReducer,
    users: usersReducer,
    counter_users: counterUserReducer,
    counter_bank: counterBankReducer
});

const store = createStore(allReducers,{
    counter_users: 0,
    counter_bank:0,
       users:[
        {id:1,name:'saar',age:37,phone:"0502525252",bank_account_id:null},
        {id:2,name:'saar1',age:25,phone:"05251561561",bank_account_id:null},
        {id:3,name:'saar2',age:55,phone:"0525145454",bank_account_id:null},
        {id:4,name:'saar3',age:60,phone:"05354651561",bank_account_id:null}
       ],
    bank_accounts:[
        {id:1,bank_number:12,branch:654,account_number:154615,balance:15000},
        {id:2,bank_number:11,branch:123,account_number:848646,balance:25000},
        {id:3,bank_number:13,branch:568,account_number:141414,balance:35000},
        {id:4,bank_number:12,branch:987,account_number:752752,balance:45000}
       ]
});
//console.log(store.getState());

console.log(store.getState());
//

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
