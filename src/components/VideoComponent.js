import React from "react";
import ReactPlayer from "react-player";

function Video() {

    return (
            <ReactPlayer width={'100%'} controls={true} volume={1} muted={true} url='https://youtu.be/Bxs8p1x38YE' />
        )
};

export default Video;