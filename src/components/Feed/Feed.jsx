import './Feed.scss';
import FeedPost from '../FeedPost/FeedPost';
const Feed=()=>{
    return(
        <div className="feed">
            {/* <h2>Feed</h2> */}
            <div className="post">
                <form className='form-post'>
                <textarea className="post-text"></textarea>
                <button className="btn-post">POST</button>
                </form>
            </div>
            <FeedPost/>
        </div>
    )

}
export default Feed;