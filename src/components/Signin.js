import React from 'react'
import '../styles/Style.css'
import '../styles/Premium.css'
import {Link } from 'react-router-dom'
function Signin() {
    return (
    <div>
             <div class="container mt-5 mb-5">
                <div class="row d-flex align-items-center justify-content-center">
                     <div class="col-md-6">
                        <div class="card px-5 py-5"> 
                            <h5 class="mt-3">Login Here!</h5> <small class="mt-2 text-muted">Welcome to <font color="#ffc400" size = "4px">A</font>thlete <font color="#ffc400" size = "4px">C</font>lub</small>
                            <div class="form-input"> <i class="fa fa-envelope"></i> <input type="email" class="form-control" placeholder="Email address" id="email" /> </div>
                            <div class="form-input"> <i class="fa fa-lock"></i> <input type="password" class="form-control" placeholder="password" id="password" /> </div>
                            <button class="btn btn-primary mt-4 signup " id="buttonSub" onclick="login()">Login</button>
                            <div class="text-center mt-3"> <span>Or continue with these social profile</span> </div>
                            <div class="d-flex justify-content-center mt-4"> <span class="social"><i class="fa fa-google"></i></span> <span class="social"><i class="fa fa-facebook"></i></span> <span class="social"><i class="fa fa-twitter"></i></span> <span class="social"><i class="fa fa-linkedin"></i></span> </div>
                            <div class="text-center mt-4"> <span>New here?</span> <font color="#ffc400"><Link to="/signup" class="text-decoration-none">Join Now</Link></font> </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Signin
