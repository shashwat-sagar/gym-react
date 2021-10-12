import React from 'react'
import '../styles/Style.css'
import '../styles/Premium.css'
import { Link } from 'react-router-dom'
function Signup() {
    return (
        <div>
            <div class="container mt-5 mb-5">
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card px-5 py-5"> <span class="circle"><i class="fa fa-check"></i></span>
                <h5 class="mt-3">Join before it gets too late...</h5> <small class="mt-2 text-muted">Your Body can stand almost anything.<br />It's your mind that you have to continue.</small>
                <div class="form-input"> <i class="fa fa-envelope"></i> <input type="email" class="form-control" placeholder="Email address" id="email" /> </div>
                <div class="form-input"> <i class="fa fa-lock"></i> <input type="password" class="form-control" placeholder="password" id="password" /> </div>
                <div class="form-input"> <i class="fa fa-user"></i> <input type="full_name" class="form-control" placeholder="Full Name" id="full_name" /> </div>
                <div class="form-input"> <i class="fa fa-user"></i> <input type="phone" class="form-control" placeholder="Phone" id="phone" /> </div>
                <div class="form-input"> <i class="fa fa-user"></i> <input type="age" class="form-control" placeholder="Age" id="age" /> </div>
                <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label class="form-check-label" for="flexCheckChecked"> I agree all the statements </label> </div> 
                <button class="btn btn-primary mt-4 signup " id="buttonSub" onclick="register()">Register</button>
                <div class="text-center mt-3"> <span>Or continue with these social profile</span> </div>
                <div class="d-flex justify-content-center mt-4"> <span class="social"><i class="fa fa-google"></i></span> <span class="social"><i class="fa fa-facebook"></i></span> <span class="social"><i class="fa fa-twitter"></i></span> <span class="social"><i class="fa fa-linkedin"></i></span> </div>
                <div class="text-center mt-4"> <span>Already a member? </span> <font color="#ffc400"><Link to="/signin" class="text-decoration-none">Join</Link></font> </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Signup
