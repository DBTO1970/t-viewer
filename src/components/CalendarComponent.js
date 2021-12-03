import React from "react";

function CalenderPanel () {
    const date = new Date().toLocaleDateString();
    return (
        <div className='calendar'>
        calendar stuff goes here
            {date}
        </div>
    )
}

export default CalenderPanel;