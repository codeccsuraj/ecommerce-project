import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../../assets/icon/logo.png";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between mx-8">
          <div className="flex items-center justify-start w-3/4 ">
            <div className=" w-1/4 ">
              <Link className="">
                <img src={logo_img} alt="" className="object-cover w-20" />
              </Link>
            </div>
            <div className="w-3/4">
              <input type="search" placeholder="Search products.." className="w-full py-3 px-3 rounded-xl bg-slate-100 border-none outline-none" />
            </div>
          </div>
          <div className="w-1/4 flex justify-evenly items-center">
              <Link className="flex flex-col items-center">
                <IoBagHandleSharp className="text-4xl text-[#7dd87d]" />
                <span className="font-bold text-[#906387]">Cart</span>
              </Link>
              <Link className="flex flex-col items-center">
                <FaWallet className="text-4xl text-[#7dd87d]" />
                <span className="font-bold text-[#906387]">Wallet</span>
              </Link>
              <Link>
                <Link 
                    className="bg-[#906387] text-1xl font-bold rounded-2xl py-2 text-[#7dd87d] hover:text-white px-4"
                    to='/login'
                >Login / Signup</Link>
                    
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
