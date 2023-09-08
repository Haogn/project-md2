import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const dataLogin = JSON.parse(localStorage.getItem("dataLogin"));
  console.log(dataLogin);
  const hanleOut = () => {
    localStorage.removeItem("dataLogin");
    navigate("/login");
  };

  return (
    <nav>
      <div className="Nav-header">
        <ul className="Nav-left">
          <li>
            <i className="fa-solid fa-location-dot"></i> Cannada
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-heart"></i> Enghish
          </li>
          <li>
            <i className="fa-solid fa-phone-volume"></i> +84 976811131
          </li>
        </ul>

        <div className="Nav-logo">
          <Link to="/">
            <img src="./img/logo.png" />
          </Link>
        </div>

        <ul className="Nav-right">
          {dataLogin ? (
            <li style={{ color: "#fff" }}>
              <Link to="/history">
                {dataLogin.username} <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Sign In </Link>
            </li>
          )}

          <li>
            <ion-icon name="heart-circle-outline"></ion-icon>
          </li>
          <li>
            <Link to="/bag">
              Bag <ion-icon name="bag-handle"></ion-icon>
            </Link>
          </li>
          <li>
            <ion-icon onClick={hanleOut} name="log-out-outline"></ion-icon>
          </li>
          {/* <li>
            <Link to="/product">Product</Link>
          </li> */}
        </ul>
      </div>

      <div className="Nav-product">
        <div className="Container-Nav">
          <ul className="row">
            <li className="col">
              <Link to="/gifts">GIFTS</Link>
            </li>
            <li className="col">
              <Link to="/what's">WHAT'S NEW</Link>
            </li>
            <li className="col">
              <Link to="/handbags">HANDBAGS</Link>
            </li>
            <li className="col">
              <Link to="/women">WOMEN</Link>
            </li>
            <li className="col">
              <Link to="/men">MEN</Link>
            </li>
            <li className="col">
              <Link to="/mx">MX</Link>
            </li>
            <li className="col">
              <Link to="/chidren">CHIDREN</Link>
            </li>
            <li className="col">
              <Link to="/watches">JEWELRY & WATCHES</Link>
            </li>
            <li className="col">
              <Link to="/beauty">BEAUTY</Link>
            </li>
            <li className="col">
              <Link to="/decor">DÉCOR & LIFESTYLE</Link>
            </li>

            <li className="col">
              <Link to="/travel">TRAVEL</Link>
            </li>
            <li className="col">
              <Link to="/vault">VAULT</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="icon-product">
        <i className="fa-solid fa-list" /> MENU
      </div> */}
    </nav>
  );
}

export default Navbar;
