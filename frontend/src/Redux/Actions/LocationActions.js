import { LOCATIONS_API } from "../../Constants/urlConstants";

export const REQUEST_LOCATIONS_GET = 'REQUEST_LOCATIONS_GET';
export const RECEIVE_LOCATIONS_GET = 'RECEIVE_LOCATIONS_GET';

export const requestPosts = () => ({
type: REQUEST_LOCATIONS_GET,
});
export const receivedPosts = data => ({
type: RECEIVE_LOCATIONS_GET,
data: data,
});
export function getLocations() {
 return function (dispatch) {
   dispatch(requestPosts());
   return fetch(LOCATIONS_API)
   .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
  )
   .then((json) => {
      dispatch(receivedPosts(json));
   },
  );
 };
}