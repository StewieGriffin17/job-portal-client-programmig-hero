import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottie from "../assets/Signup.json";
import AuthContext from "../context/AuthContext";
import SocialLogin from "./SocialLogin";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters, include one uppercase letter and one number.");
      return;
    }
    
    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error=> {
      console.log(error.message)
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4">Register Now!</h1>
          <div className="card-body">

            <form onSubmit={handleRegister} className="fieldset">
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
                Register
              </button>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
