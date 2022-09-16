import "./tweet.css";
import { Avatar } from "@mui/material";
import { Verified } from "@mui/icons-material";

const Tweet = ({displayName, userName, verified, avatar, text, media}) => {
    return ( 
        <div className="tweet">
            <div className="tweet__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1540875738525622279/XVwo1oHl_400x400.jpg"/>
            </div>
            <div className="tweet__body">
                <div className="tweet__header">
                    <div className="tweet__headerText">
                        <h3>
                            devWaz👾 <span>
                            <Verified className="tweet__badge"/> @heyFawaz
                            </span>
                        </h3>
                    </div>
                    <div className="tweet__desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut?</p>
                    </div>
                </div>
                <img src="" alt="" />
            </div>
        </div>
     );
}
 
export default Tweet;