import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, signInWithFacebook} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SignUp() {
//   const handleOnClick = async (provider) => {
//     const res = await signInWithFacebook(provider);
//     console.log(res)
//   }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  });

  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card px-5 py-5">
            <small>
              <span id="error" style={{color: 'red'}}></span>
            </small>
            <small>
              <span id="reset" style={{color: 'greenyellow'}}></span>
            </small>
            <h3 class="mt-3">Login Here!</h3>{" "}
            <small class="mt-1 text-muted">
              Welcome to{" "}
              <font color="#ffc400" size="4px">
                A
              </font>
              thlete{" "}
              <font color="#ffc400" size="4px">
                C
              </font>
              lub
            </small>
            <div class="form-input">
              {" "}
              <i class="fa fa-envelope"></i>{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                placeholder="Email address"
                id="email"
              />{" "}
            </div>
            <div class="form-input">
              {" "}
              <i class="fa fa-lock"></i>{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                placeholder="password"
                id="password"
              />{" "}
            </div>
            <button
              class="btn btn-primary mt-4 signup "
              id="buttonSub"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <Link to="/reset">
              Forgot Password
            </Link>
            <div class="text-center mt-3">
              {" "}
              <span>Or continue with these social profile</span>{" "}
            </div>
            <div class="d-flex justify-content-center mt-4">
              {" "}
              <span class="social">
                <i class="fa fa-google" onClick={signInWithGoogle}></i>
              </span>{" "}
              <span class="social">
                <i class="fa fa-facebook" onClick={signInWithFacebook}></i>
              </span>{" "}
              <span class="social">
                <i class="fa fa-twitter"></i>
              </span>{" "}
            </div>
            <div class="text-center mt-4">
              {" "}
              <span>New here?</span>{" "}
              <font color="#ffc400">
                <Link to="/register" class="text-decoration-none">
                  Join Now
                </Link>
              </font>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
