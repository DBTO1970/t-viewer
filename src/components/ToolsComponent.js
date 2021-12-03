import React from "react";
import ControlsPanel from "./ControlPanel";
import CalenderPanel from "./CalendarComponent";
import ConferencingPanel from "./ConferencingComponent";
import UserPanel from "./UserInfoComponent";

function ToolsPanel () {

    return(
        <div className="tools">
            <UserPanel />
            <CalenderPanel />
            <ConferencingPanel />
            <ControlsPanel />
        </div>
    )
}

export default ToolsPanel;