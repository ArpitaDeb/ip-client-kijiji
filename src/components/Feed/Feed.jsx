import "./Feed.scss";
import FeedPost from "../FeedPost/FeedPost";
import { useEffect } from "react";
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_API_URL;

const Feed = ({ posts }) => {
  const handleSubmit = async (e) => {
    e.preventDeafult();
    const newPost = {
      author: e.target.username.value,
      content: e.target.post.value,
    };
    // const res= await axios.patch(`${SERVER_URL}/${groupId}/post_feed`,newPost);
    alert("Uploaded post!");
  };
  return (
    <div className="feed">
      <h2>Feed</h2>
      <div className="post">
        <form className="form-post" onSubmit={handleSubmit}>
          <input
            className="post-text"
            placeholder="name"
            name="username"
          ></input>
          <textarea
            className="post-text"
            name="post"
            placeholder="share your thoughts..."
          ></textarea>
          <button className="btn-post" type="submit">
            POST
          </button>
        </form>
      </div>
      {posts.map((post) => {
        return <FeedPost post={post} key={post.id} />;
      })}
    </div>
  );
};
export default Feed;
