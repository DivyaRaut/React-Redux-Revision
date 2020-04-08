import { FETCH_POSTS, NEW_POST } from "../actions/types";
const initialState = {
  items: [],
  item: {},
};
//The following function will deal with postActions.
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer FetchPost");
      return {
        ...state, //Returning the current state.
        items: action.payload,
      };
    case NEW_POST:
      console.log("reducer NewPost");
      return {
        ...state, //Returning the current state.
        item: action.payload,
      };

    default:
      return state;
  }
}

//Implement the above all this(state) into the Posts component.
