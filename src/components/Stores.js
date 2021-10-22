import React from 'react'
import playstore from '../Images/playstore.png'
import './styles/stores.css'

function Stores() {
    return (
        <div>
            {/* <font color="#ffc400"><i class="fab fa-google-play"></i></font> */}
            <a href="https://play.google.com/store" ><img src={playstore} alt="/" id="playstore"/></a>
        </div>
    )
}

export default Stores
