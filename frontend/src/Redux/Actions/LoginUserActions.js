import { LOGIN_API } from "../../Constants/urlConstants";

export const REQUEST_LOGIN_USER_POST = 'REQUEST_LOGIN_USER_POST';
export const RECEIVE_LOGIN_USER_POST = 'RECEIVE_LOGIN_USER_POST';

export const requestPosts = () => ({
type: REQUEST_LOGIN_USER_POST,
});
export const receivedPosts = data => ({
type: RECEIVE_LOGIN_USER_POST,
data: data,
});

export const loginUser = (body) => {
 return  async (dispatch) => {
   dispatch(requestPosts());
   try {

         const response = await fetch(LOGIN_API, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
         const json = await response.json();
         return dispatch(receivedPosts(json));
         
     } catch (error) {
         const json = console.log('An error occurred.', error);
         return dispatch(receivedPosts(json));
     }
 };
}