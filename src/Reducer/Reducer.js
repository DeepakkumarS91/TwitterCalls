import {requestError, requestPending, requestSolved, searchField} from '../Actions/Actions';

const resultState = {
        isPending : false ,
        result :[],
        error : '',
        showResults:true
}

export const resultReducer = (state = resultState , action={})=>{
    switch(action.type){
        case requestPending :
           return {...state,isPending:true}
        case requestSolved :
            return {...state,result:action.data, isPending:false}

        case requestError :
            return {...state,error: action.error,isPending:false}


        default :
          return state
    }
}