import React from 'react'
import Image from "../Images/1.png"
import "./styles/Trainer.css"
import Cert1 from '../Images/cert1.jpeg'
import Cert2 from '../Images/cert2.jpeg'
import Cert3 from '../Images/cert3.jpeg'

function Trainer() {
    return (
        <div>
            <div className="UpperPart">
                <h1 className="TopHeading">Our Trainer</h1>
                <img src={Image} alt="" className="Imagess" />
            </div>
            <div className="card-body text-dark">
          <h6 className="card-title text-warning">Mr. Prashant Praksdh Upadhayay</h6>
          <br></br>
          <p className="card-text text-secondary">
           Trained by Gold's Gym Fitness Institute 
          </p>
          <br />
          <p className="details text-warning">
                    <strong>Phone:</strong> <a class="footerContactInfo" href="tel:+91 9651597063"><font color="#ffc400">+91</font> 965-<font color="#ffc400">159</font>-7063<br /></a>
                     <strong>Email:</strong> <a class="footerContactInfo" href="mailto:athlete_club@gmail.com">athlete_club<font color="#ffc400">@gmail.com</font><br /></a>
         </p>
         <div className="certis">
             <img src={Cert1} alt="" className="cert1"/>
             <img src={Cert2} alt="" className="cert1"/>
             <img src={Cert3} alt="" className="cert1"/>
         </div>
          </div>
        </div>
    )
}

export default Trainer
