import React from "react";
import { Link } from "react-router-dom";
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
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand test-2xl uppercase font-bold" href="#">
            DIGIUNCLE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/shop" className="nav-link fw-bold" aria-current="page">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link fw-bold" aria-current="page">
                  Cart({totalUniqueItems})
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
