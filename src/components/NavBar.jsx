import React from "react";

import NavBarLogo from "../images/logo-GdqARQRt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom fixed-top ">
      <div className="container  ">
        <a className="navbar-brand" href="#">
          <div className="d-flex gap-2 align-items-center  ">
            <img
              className="w-h-48 NavBarLogo"
              src={NavBarLogo}
              alt="nav bar logo"
            />
            <div>
              <div className="fs-5 fw-bold lh-1 text-white mb-1">عدسة</div>
              <div className="fs-12 fw-normal text-dark-orange d-none d-sm-block ">
                عالم التصوير الفوتوغرافي
              </div>
            </div>
          </div>
        </a>
        <button
          className=" border-1 bg-dark rounded-3 ms-auto d-lg-none "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className=" text-white fs-3 ">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div className="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
          <div className=" border border-none rounded-pill d-block d-lg-flex  fs-14 p-6 text-secondary fw-bold ">
            <NavLink className="bomb text-secondary text-decoration-none rounded-pill" to={"/"}>
              <div className="main-part py-10 px-20   mb-2 mb-lg-0">
                الرئيسيه
              </div>
            </NavLink>
            <NavLink className="bomb text-secondary text-decoration-none rounded-pill" to={"/blog"}>
              <div className="main-part py-10 px-20   mb-2 mb-lg-0">
                المدونه
              </div>
            </NavLink>
            <NavLink className="bomb text-secondary text-decoration-none rounded-pill" to={"/whoUs"}>
              <div className="main-part py-10 px-20   mb-2 mb-lg-0">
                من نحن
              </div>
            </NavLink>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <button className="nav-search-btn btn text-secondary d-none d-lg-inline w-h-46 rounded-3 ">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className="nav-btn-read-more btn text-white  rounded-pill fs-14 fw-semibold py-3 px-32  bg-LG-Btn  w-md-100">
              ابدأ القراءة
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
