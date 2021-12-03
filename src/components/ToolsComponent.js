import React from "react";
import ControlsPanel from "./ControlPanel";
import CalenderPanel from "./CalendarComponent";

function ToolsPanel () {

    return(
        <div className="tools">
            <CalenderPanel />
            <ControlsPanel />
        </div>
    )
}

export default ToolsPanel;