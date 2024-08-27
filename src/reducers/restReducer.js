import { SUCCESS,FAIL } from "../constants/restConstants";

export const restreducer=(state={dataList:[]},action)=>{
    console.log(action);
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
    // console.log(action);
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
export const prodects=(state={dataList:[]},action)=>{
    console.log(action);
    switch(action.type){
        case SUCCESS:
            return{
                dataList:action.payload.projects
                
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
export const latestProject=(state={latests:[]},action)=>{
    console.log(action);
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



