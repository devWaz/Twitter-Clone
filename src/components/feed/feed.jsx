import "./feed.css";
import Tweetbox from "../tweetbox/tweetbox";
import Tweet from "../tweet/tweet";
import { useState } from "react";
import db from "../firebase.js";
import { useEffect } from "react";

const Feed = () => {
    const [tweets , setTweets] = useState();

    useEffect(()=>{
        db.collection("Tweets").onSnapshot(snapshot => (
            setTweets(snapshot.map(doc => doc.data()))
        ))
    } , [])

    return (       
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>
            
            {/* Tweetbox */}
            <Tweetbox />

            {/* Tweets */}
            <Tweet 
            displayName="devWaz👾"
            userName="heyFawaz"
            text="Hey guys, Today i'll be building a twitter clone with react and firebase. lets go!"
            avatar="https://pbs.twimg.com/profile_images/1540875738525622279/XVwo1oHl_400x400.jpg"
            verified={true}
            media="https://freerangestock.com/sample/113050/coding-and-programming--software-development-and-it.jpg"/>
            <Tweet/>

            {tweets.map((tweet) => (
            <Tweet
            displayName={tweet.displayName}
            userName={tweet.userName}
            text={tweet.text}
            avatar={tweet.avatar}
            verified={tweet.verified}
            media={tweet.media}/>
            )
            )}
        </div>
     );
}
 
export default Feed;