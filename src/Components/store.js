// import {createStore,combineReducers,applyMiddleware}from 'redux'
import { certificatereducer, latestProject,projects, allProjects, restreducer} from '../reducers/restReducer';
import { configureStore } from '@reduxjs/toolkit';



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
        projects:projects,
        allProjects:allProjects,
        latest:latestProject
        
    },
    // middleware:[thunk]
    
})

export default reducers