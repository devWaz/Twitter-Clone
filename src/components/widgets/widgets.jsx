import "./widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed} from 'react-twitter-embed';
import { Search } from "@mui/icons-material";

const Widgets = () => {
    return ( 
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="1571209104726556672"/>

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="twitter"
                    options={{height: 300}}/>

                <TwitterShareButton 
                    url={"https://heyfawaz.netlify.app"}
                    options={{text: "Checkout my Portfolio website" , via: "heyFawaz"}}/>
            </div>
        </div>
     );
}
 
export default Widgets;