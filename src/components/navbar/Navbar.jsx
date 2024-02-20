import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../../assets/icon/logo.png";
import Search from "../search/Search";
import { useCart } from "react-use-cart";



const Navbar = () => {

  const {totalUniqueItems} = useCart();


  return (
    <>
      <nav className="flex items-center justify-end bg-slate-300">
        <div className="mx-10 py-1">
          <ul className="flex items-center gap-3">
            <li>
              <Link className="text-[14px] font-semibold">My account</Link>
            </li>
            <li>
              <Link className="text-[14px] font-semibold">Orders</Link>
            </li>
            <li>
              <Link className="text-[14px] font-semibold">Support</Link>
            </li>
            <li>
              <Link className="text-[14px] font-semibold">Return policy</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="py-2 bg-slate-50 sticky top-0 left-0 z-50">
        <div className="mx-10 flex items-center justify-between">
          <div className="w-14">
            <Link to="/">
              <img src={logo_img} alt="" className="object-cover w-full" />
            </Link>
          </div>
          <div className="flex items-center justify-between w-3/5">
            <form action="" className="w-3/5">
              <Search />
            </form>
            <ul className="flex items-center gap-3">
            <li>
              <Link className="font-semibold">Shop</Link>
            </li>
            <li>
              <Link className="font-semibold">Wishlist(0)</Link>
            </li>
            <li>
              <Link to='/cart' className="font-semibold">Cart({totalUniqueItems})</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
