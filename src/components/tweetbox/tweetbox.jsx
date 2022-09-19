import "./tweetbox.css";
import { Avatar , Button } from "@mui/material";

const Tweetbox = () => {
    return ( 
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1540875738525622279/XVwo1oHl_400x400.jpg"/>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <div className="tweet__input">
                    <input 
                    className="tweetbox__imageInput"
                    type="text" 
                    placeholder="Enter image url" />
                    <Button className="tweetbox__tweet">Tweet</Button>
                </div>
            </form>
        </div>
     );
}
 
export default Tweetbox;