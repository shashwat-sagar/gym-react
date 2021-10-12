import React from 'react'
import '../styles/Style.css'
import video from './Media/Video/ghd.mp4'
export default function VideoMiddle() {
    return (
        <div>
            <div class="middle">
                <div id="video-con">
            
                <video id="video" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video} type="video/mp4" />
                </video>
            </div>
        <div id="comment">
            <p class="paraunderVid">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
                fuga earum quidem delectus dolorem consequuntur, temporibus reiciendis
                quia in a facilis doloribus voluptates totam hic sint at assumenda rem
                ea!
            </p>
        </div>
    </div>
        </div>
    )
}
