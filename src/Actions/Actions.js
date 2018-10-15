import {getBearerToken} from '../Utilities/TweetUtil';

export const searchField = 'SEARCH_FIELD';
export const requestPending ='REQUEST_PENDING';
export const requestSolved = 'REQUEST_SOLVED';
export const requestError = 'REQUEST_ERROR';




export let searchTweet=(name)=>(dispatch)=> {
    dispatch({type:requestPending});
    getBearerToken()
        .then((bearerToken) =>fetch(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${name}`,{
                method:'GET',
                headers:{
                Authorization : `Bearer ${bearerToken}`
                }
                })
        .then(response => response.json())
        .then(result =>{
            const search = result.statuses.filter(status => 
                        status.text.includes(name)
                )
            return search;
        })
        .then((data) => dispatch({ type : requestSolved , data }))            
        .catch((error)=> dispatch({ type : requestError , error}))

)}