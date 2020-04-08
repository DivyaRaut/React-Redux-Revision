import React, { Component } from "react";
import { connect } from "react-redux"; //Connects your component to your redux store that was provided by the provider component.
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types"; //Adding props to proptypes.
class Posts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   };
  // }
  componentDidMount() {
    // console.log(123);
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ posts: data }));
    this.props.fetchPosts(); //While using redux
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newpost) {
      this.props.posts.unshift(nextProps.newpost);
    }
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        Posts
        {postItems}
      </div>
    );
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired, //fetchPosts function is actually a property.
  posts: PropTypes.array.isRequired, //posts is again a property because we've mapped the items to the posts property and its an array.
  newpost: PropTypes.object,
};
const mapStateToProps = (state) => ({
  posts: state.posts.items, //posts: here is from the rootreducers 'posts'. See 'posts' of combineReducers
  //After assigning state.posts.items from actions & reducer to props, change this.state.posts to this.props.posts above.
  newpost: state.posts.item, //Added new post to the prop. Then add the new post to the list using componentWillRecieveProps above.
});
// export default Posts; //Instead of this we'll export connect with fetchPosts:
export default connect(mapStateToProps, { fetchPosts })(Posts);
