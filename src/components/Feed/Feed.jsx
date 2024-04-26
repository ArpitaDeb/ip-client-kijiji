import './Feed.scss';
import FeedPost from '../FeedPost/FeedPost';
import { useEffect ,useState } from 'react';
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_API_URL;
const Feed=({posts,groupId})=>{
    const [username, setUsername] = useState('');
    const [postContent, setPostContent] = useState('');
    const [allPosts, setAllPosts] = useState(posts);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            author: username,
            content: postContent,
        };
        try {
            const response = await axios.patch(`${SERVER_URL}/groups/${groupId}/post_feeds`, newPost);
            setAllPosts([response.data, ...allPosts]);
            setUsername('');
            setPostContent('');
            e.target.reset();
            console.log('Form cleared');
        } catch (error) {
            console.error('Error uploading post:', error);
        }
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };
    useEffect(() => {
        setAllPosts(posts);
    }, [posts]);
    return(
        <div className="feed">
            <h2>Feed</h2>
            <div className="post">
                <form className='form-post'onSubmit={handleSubmit}>
                    <input className='post-text' placeholder='name' name='username' onChange={handleUsernameChange}></input>
                    <textarea className="post-text" name='postContent' placeholder='share your thoughts...' onChange={handlePostContentChange}></textarea>
                <button className="btn-post" type='submit'>POST</button>
                </form>
            </div>
            {
                allPosts.map((post)=>{
                    return(
                        <FeedPost post={post} key={post.id}/>
                    )
                })
            }
        </div>
    )
}
export default Feed