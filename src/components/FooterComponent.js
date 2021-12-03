import React from "react";
import ControlsPanel from "./ControlPanel";

function FooterPanel () {

    return (
        // Footer content and controls go here
        <div className='footer'>
            <ControlsPanel />
            <p>&copy;2021 2022 Don Barto <a href="https://donbarto.com/" rel="norefferer" target="_new" >donbarto.com</a></p>
        </div>
    )
}

export default FooterPanel;