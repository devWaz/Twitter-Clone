import "./feed.css";
import Tweetbox from "../tweetbox/tweetbox";
import Tweet from "../tweet/tweet";

const Feed = () => {
    return (       
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>
            
            {/* Tweetbox */}
            <Tweetbox/>

            {/* Tweets */}
            <Tweet/>
            <Tweet/>
        </div>
     );
}
 
export default Feed;