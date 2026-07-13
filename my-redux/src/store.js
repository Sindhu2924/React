//OLDER WAY OF WRITING REDUX USING CREATESTORE 
// import { createStore } from "redux";

// //Initial State
// const initialState = {
//     user: {
//         userName: "Sindhu",
//         balance: 25000,
//     },
// };

// //Action
// export  let addMoney =(amt)=>({
//     type : "addMoney",
//     payload : amt,
// });

// export let removeMoney = (amt) =>({
//     type:"removeMoney",
//     payload : amt,
// });

// //Reducer
// function reducer(state = initialState, action){
//     switch(action.type){
//         case "addMoney":
//             return {
//                 user: {
//                     userName:state.user.userName,
//                     balance: state.user.balance + action.payload,
//                 },
//             };

//         case "removeMoney":
//             return {
//                 user: {
//                     userName:state.user.userName,
//                     balance: state.user.balance - action.payload,
//                 },
//             };
//         default:
//             return state;
//     }
// }

// let store = createStore(reducer);
// export default store;







//NEW VERSION OR MMODERN WAY OF WRITING REDUX

import {configureStore,createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"user",
    initialState:{
    userName:"Sindhu",
    balance:25000,
},

reducers :{
    addMoney: (state,action)=>{
        state.balance+=action.payload;
    },
     removeMoney: (state,action)=>{
        state.balance-=action.payload;
    },
},
});
export const {addMoney, removeMoney} = userSlice.actions;

const store = configureStore({
    reducer:{user:userSlice.reducer},
});
export default store;