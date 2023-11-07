"use client"

import { ArrowUp, CaretUp, XSquare } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed right-2 bottom-2">
                <button onClick={handleVideoPlayer} className="float-right"><XSquare size={32} color="#454040" weight="fill" /></button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button className="fixed bottom-5 right-5 w-auto bg-dark flex items-center p-2 text-primary hover:bg-accent rounded" onClick={handleVideoPlayer}>Tonton Trailer <CaretUp size={32} color="#ffffff" weight="bold" /></button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />

}

export default VideoPlayer