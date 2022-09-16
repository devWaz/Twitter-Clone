import "./tweetbox.css";
import { Avatar , Button } from "@mui/material";

const Tweetbox = () => {
    return ( 
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar/>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input 
                className="tweetbox__imageInput"
                type="text" 
                placeholder="Enter image URL" />
                <Button className="tweetbox__tweet">Tweet</Button>
            </form>
        </div>
     );
}
 
export default Tweetbox;