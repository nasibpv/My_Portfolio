import { SUCCESS,FAIL } from "../constants/restConstants";

export const restreducer=(state={dataList:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                dataList:action.payload
                
            }
        case FAIL:{
            return{
                dataList:action.payload
            }
        }
        default:
            return state
    }
}
export const certificatereducer=(state={dataList:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                dataList:action.payload.certificates
                
            }
        case FAIL:{
            return{
                dataList:action.payload
            }
        }
        default:
            return state
    }
}
export const projects=(state={projects:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                projects:action.payload.projects
                
            }
        case FAIL:{
            return{
                projects:action
            }
        }
        default:
            return state
    }
}
export const allProjects=(state={allProject:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                allProject:action.payload.projects
                
            }
        case FAIL:{
            return{
                allProject:action
            }
        }
        default:
            return state
    }
}
export const latestProject=(state={latests:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                latests:action.payload.projects[0]
                
            }
        case FAIL:{
            return{
                latests:action.payload
            }
        }
        default:
            return state
    }
}
// export const certificates=(state={certificates:[]},action)=>{
//     console.log(action.payload);
//     switch(action.type){
//         case SUCCESS:
//             return{
//                 certificates:action.payload
                
//             }
//         case FAIL:{
//             return{
//                 certificates:action.payload
//             }
//         }
//         default:
//             return state
//     }
// }



