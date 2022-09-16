import "./feed.css";
import Tweetbox from "../tweetbox/tweetbox";

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
        </div>
     );
}
 
export default Feed;