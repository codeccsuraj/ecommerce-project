import React from "react";
import { Link } from "react-router-dom";
import login_img from "../assets/loginbg.png";

const Signup = () => {
  return (
    <div className="w-screen overflow-x-hidden ">
      <div className="mx-32 grid grid-cols-2">
        <div>
          <img src={login_img} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl py-4 text-center">Sign up here</h2>
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="text-cyan-600 font-bold">
              Login in here
            </Link>
          </p>
          <form action="" className="w-full">
            <div className="grid grid-cols-2 gap-2">
              <div className="form-group flex flex-col gap-2 py-3">
                <label htmlFor="first_name" className="text-lg font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                />
              </div>
              <div className="form-group flex flex-col gap-2 py-3">
                <label htmlFor="last_name" className="text-lg font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                />
              </div>
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="mobile" className="text-lg font-bold">
                Mobile
              </label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
              />
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
              />
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="password" className="text-lg font-bold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
              />
            </div>
            <div className="form-group flex justify-center gap-2 py-3">
              <button className="bg-orange-700 py-3 text-lg font-bold rounded-2xl w-2/4">
                Register
              </button>
            </div>
          </form>
          <div className="py-3">
            <p>
              Don't remember password ?{" "}
              <Link className="text-cyan-600 font-bold">forgot now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
