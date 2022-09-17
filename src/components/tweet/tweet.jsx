import "./tweet.css";
import { Avatar } from "@mui/material";
import { Verified , Repeat , FavoriteBorder , Publish, ChatBubbleOutline } from "@mui/icons-material";

const Tweet = ({displayName, userName, verified, avatar, text, media}) => {
    return ( 
        <div className="tweet">
            <div className="tweep__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1540875738525622279/XVwo1oHl_400x400.jpg"/>
            </div>
            <div className="tweet__body">
                <div className="tweet__header">
                    <div className="tweet__headerText">
                        <h3>
                            devWaz👾 <div className="tweep__username">
                            <Verified className="tweep__badge"/> @heyFawaz
                            </div>
                        </h3>
                    </div>
                    <div className="tweet__desc">
                        <p>Hey guys, Today i'll be building a twitter clone with react and firebase</p>
                    </div>
                </div>
                <img src="" alt="" />
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