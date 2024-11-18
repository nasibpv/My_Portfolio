import axios from "axios";
import { SUCCESS,FAIL } from "../constants/restConstants";

export const restList = ()=>async(dispatch)=>{
    // const result =await axios.get('./products.json')
    //  OR   distructure methode
    try{
        const {data}= await axios.get('./data.json')
    dispatch(
        {
            payload:data,
            type:SUCCESS
        }
    )
    }
    catch(error){
        dispatch(
            {
                payload:error,
                type:FAIL
            }
        )
    }

}