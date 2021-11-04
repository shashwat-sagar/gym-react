import React from 'react'
import {Carousel} from '3d-react-carousal';
import "./styles/Videocarosel.css"
function Videocarosel() {
    
    let slides = 
    [
        
        
      <iframe src="https://www.youtube.com/embed/24fdcMw0Bj0" title="YouTube video" allowFullScreen id="car"></iframe>,
      <iframe src="https://www.youtube.com/embed/wnHW6o8WMas" title="YouTube video" allowFullScreen id="car"></iframe>  ,
      <iframe src="https://www.youtube.com/embed/JG9Ii3MyOzw" title="YouTube video" allowFullScreen id="car"></iframe>  ,
      <iframe src="https://www.youtube.com/embed/M4ZoCHID9GI" title="YouTube video" allowFullScreen id="car"></iframe>  ,
      <iframe src="https://www.youtube.com/embed/8r0ScEaaYms" title="YouTube video" allowFullScreen id="car"></iframe> ,
     ];
    return (
        <div id="vidCaro">
         

<Carousel slides={slides} autoplay={false} interval={1000} />

        </div>
    )
}

export default Videocarosel
