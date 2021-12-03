import React from "react";
import ChatPanel from "./ChatComponent";
import SocialFeed from "./SocialFeedComponent";
import UserPanel from "./UserInfoComponent";
import ConferencingPanel from "./ConferencingComponent";

function SocialPanel () {
    return (
        <div className="social">
            <SocialFeed />
            <ChatPanel />
            <UserPanel />
            <ConferencingPanel />
        </div>
    )
}

export default SocialPanel;
