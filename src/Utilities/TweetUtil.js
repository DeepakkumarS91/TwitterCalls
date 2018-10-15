import rawurlencode from 'locutus/php/url/urlencode';

let authorize = {
  'oauth_consumer_key' : '0fyXlgc4n5JloqBuKePhLmWdm',
  'oauth_consumer_secret':'YPVrpDoXCIq5pz8frxLQ81tDHROQRrYnJ2QJsyZOmzLMwpmfVs'
}

const consumer_key = rawurlencode(authorize.oauth_consumer_key);
const consumer_secret = rawurlencode(authorize.oauth_consumer_secret);
const key_secret = consumer_key + ':' + consumer_secret;

const b2a = btoa(key_secret);


export const getBearerToken=()=>{
   return fetch('https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token',{
                method:'POST',
                headers: { Authorization : `Basic ${b2a}`,
                            'Content-Type': `application/x-www-form-urlencoded;charset=UTF-8`} ,
                body:'grant_type=client_credentials'
                    })
            .then(response => response.json())
            .then(results=> results.access_token)
            .catch(error => error);
 }


 

    