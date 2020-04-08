import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    // e.prevenDefault();
    const post = {
      //                   ***********This post******/
      title: this.state.title,
      body: this.state.body,
    };
    // Call Action
    this.props.createPost(post); //     ***********This post******/
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <div>
            <button type="button" name="Submit" onClick={this.onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
};
export default connect(null, { createPost })(Postform);
