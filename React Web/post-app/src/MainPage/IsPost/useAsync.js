// import React, { useCallback, useEffect, useReducer } from 'react';


// function reducer(state, action){
//     switch (action.type){
//         case 'LOADING':
//             return{
//                 loading:true,
//                 data:null,
//                 error:false
//                 }
//         case 'SUCCESS':
//             return{
//                 loading:false,
//                 data:action.data,
//                 error:false
//             }
//         case 'ERROR':
//             return{
//                 loading:false,
//                 data:null,
//                 error:action.error
//             }
//         default:
//             throw new Error(`Unhanled acthion type : ${action.type}`)
        
//     }
// }

// function useAsync(callback,deps=[]){
//     const [state, dispatch]=useReducer(reducer,{
//         loading:false,
//         data:null,
//         error:null,
//     })
    
//     const fetchData=useCallback(async ()=>{
//         dispatch({type:'LOADING'});
//         try{
//             dispatch({type:'SUCCESS',data})
//         }catch(e){
//             dispatch({type:'Error', error:e})
//         }
//     },[callback])
//     useEffect(()=>{
//         fetchData();
//     },deps)

//     return [state,fetchData]
// }
// export default useAsync