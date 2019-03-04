import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
// import postsReducer from "../reduers";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h1>PostList</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  {
    fetchPosts
  }
)(PostList);
