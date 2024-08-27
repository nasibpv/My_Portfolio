// import {createStore,combineReducers,applyMiddleware}from 'redux'
import {thunk} from "redux-thunk";
import { certificatereducer, latestProject, prodects, restreducer} from '../reducers/restReducer';
import { configureStore } from '@reduxjs/toolkit';
import Projects from "./Project/Projects";



// const reducers=combineReducers({
//     dataReducers:restreducer,
//     // latestProject,
// })

// const middleware=[thunk]

// const store=createStore(reducers,applyMiddleware(...middleware))

// export default store
const reducers=configureStore({
    reducer:{
        dataReducers:restreducer,
        certificate:certificatereducer,
        projects:prodects,
        latest:latestProject
        
    },
    // middleware:[thunk]
    
})

export default reducers