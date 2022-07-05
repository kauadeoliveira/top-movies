import { DefaultUi, Youtube, Player } from "@vime/react"
import '@vime/core/themes/default.css'


export const Video = (props) => {
    return(
        <Player>
            <Youtube videoId={props.trailerId} />
            <DefaultUi />
        </Player>
    )
}