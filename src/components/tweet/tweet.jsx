import "./tweet.css";
import { Avatar } from "@mui/material";
import { Verified , Repeat , FavoriteBorder , Publish, ChatBubbleOutline } from "@mui/icons-material";

const Tweet = ({displayName, userName, verified, avatar, text, media}) => {
    return ( 
        <div className="tweet">
            <div className="tweep__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="tweet__body">
                <div className="tweet__header">
                    <div className="tweet__headerText">
                        <h3>
                            {displayName} <div className="tweep__username">
                            {verified && <Verified className="tweep__badge"/>} @{userName}
                            </div>
                        </h3>
                    </div>
                    <div className="tweet__desc">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={media} alt="" />
                <div className="tweet__buttons">
                <ChatBubbleOutline fontSize="small"/>
                <Repeat fontSize="small"/>
                <FavoriteBorder fontSize="small"/>
                <Publish fontSize="small"/>
                </div>
            </div>
        </div>
     );
}
 
export default Tweet;