import React from "react";
import ChatPanel from "./ChatComponent";
import SocialFeed from "./SocialFeedComponent";



function SocialPanel () {
    return (
        <div className="social">
            <SocialFeed />
            <ChatPanel />
            
            
        </div>
    )
}

export default SocialPanel;
