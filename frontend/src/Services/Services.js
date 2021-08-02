import { put, del, post } from '../_helpers/api';

async function postService( url, type, data ) {
    // Default options are marked with *
   console.log("type",type)
   if(type=="post"){
    post({
      path: url,
      body:data ,
      opts: {
        headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
        },
      },
    }).then(data=>alert(data))
   }
   else{
    put({
      path: url,
      body:data ,
      opts: {
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
        },
      },
    }).then(data=>alert("Success"))
   }
    
  }
  export const ServiceCall = {
    postService
  };