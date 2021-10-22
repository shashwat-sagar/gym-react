import React from 'react'

function Footer() {
    return (
        <footer id="footer">
       
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-links">
                
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
              <h4><font color="#ffc400">O</font>ur <font color="#ffc400">S</font>ervices</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/">Fitness</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/">Personal Trainer</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/">Nutritionists</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-contact">
              <h4><font color="#ffc400">C</font>ontact <font color="#ffc400">U</font>s</h4>
                <p>
                     <font color="#ffc400">Muskan Tower</font> <br />
                     Gabhariya, Chauraha<br />Sultanpur, Uttar Pradesh<br />
                     India <br /><br />
                     <strong>Phone:</strong> <a class="footerContactInfo" href="tel:+91 9651597063"><font color="#ffc400">+91</font> 965-<font color="#ffc400">159</font>-7063<br /></a>
                     <strong>Email:</strong> <a class="footerContactInfo" href="mailto:athlete_club@gmail.com">athlete_club<font color="#ffc400">@gmail.com</font><br /></a>
                </p>
              </div>
              <div class="col-lg-3 col-md-6 footer-info">
              <h3><font color="#ffc400">A</font>bout <font color="#ffc400">A</font>thlete Club</h3>
                <p>
                Wanna transform yourself?<br />
                JOIN US<br />we have the best trainers certified by goldsgym
                3200sqft area for weight training and cardio
                </p>
                <div class="social-links mt-3">
                            <a href="https://www.facebook.com/" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/athlete_club99/?hl=en" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="https://youtu.be/4vI-IS3GgbY" class="youtube"><i class="bx bxl-youtube"></i></a>
                            <a href="https://play.google.com/store" class="googleplay"><i class="fab fa-google-play"></i></a>
                        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            © Copyright{" "}
            <strong>
              <span>Athlete Club</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits" id="me">
            Made with ❤️ by
            <a href="https://shashwatsagar.netlify.app/" id="developer"> Shashwat Sagar</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer
