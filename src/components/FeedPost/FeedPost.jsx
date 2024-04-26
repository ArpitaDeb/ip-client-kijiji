import './FeedPost.scss';

const FeedPost=({post})=>{
    return(
        <div className='feed-post'>
            <h3 className='post-author'>{post.author}</h3>
            <p className='post-content'>{post.content}</p>
        </div>
    )
}
export default FeedPost;