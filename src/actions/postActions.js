import { FETCH_POSTS, NEW_POST } from "./types";

//Thunk middleware allows us to actually use or call the dispath function directly so that we can make asyn call directly.
//Think of dispatch as a resolver or a promise.Whenever we send a data we call a dispatch.

//ES6 Syntax: MOre cleaner way:
export const fetchPosts = () => (dispatch) => {
  console.log("Fetching action called");
  console.log(
    "After fetching its dispatching type and payload to reducer. Check if thats being called or not in postReducers"
  );
  //This is where we'll create out fetch: So grab a fetch call from Posts.js. Then you'll no longer need componentWillMount/componentDidMount and constructor as we are using Redux now.
  //And the post will now come from appliccation state/store i.e from redux.
  //And instead of this.setState, we'll dispatch the data to reducer. As follows:
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  console.log("create action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};

//ES5 Syntax:
// export function fetchPosts() {
//     return function (dispatch) {
//      fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => res.json())
//         .then((posts) =>
//           dispatch({
//             type: FETCH_POSTS,
//             payload: posts,
//           })
//         );
//     };
//   }
