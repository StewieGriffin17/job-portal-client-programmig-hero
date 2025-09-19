import React, { useContext } from "react";
import registerLottie from "../assets/Signup.json";
import Lottie from "lottie-react";
import AuthContext from "../context/AuthContext";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Sign In", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4">Sign In!</h1>
          <div className="card-body">
            <form onSubmit={handleSignin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Log In
              </button>
            </form>
            <div>
              <SocialLogin from={from}></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
