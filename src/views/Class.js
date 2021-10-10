import React, {useRef, useState} from 'react';
import ReactPlayer from "react-player";
import './styles.css'

const Class = () => {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(true)

    async function muteHandler() {
        setPlaying(false);
    }
    return (
        <div className={"class-body"}>
            <ReactPlayer url={"https://www.youtube.com/watch?v=wJ7TIwq4sDw"} playing={true} muted={playing} onPlay={muteHandler} className={"class"} controls height={'100vh'} width={'100vw'}/>
        </div>
    );
};

export default Class;
