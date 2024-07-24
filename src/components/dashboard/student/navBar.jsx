import React from 'react';
import PropTypes from 'prop-types';
import logo from "../../../assets/newlogo.png";
import { Link } from 'react-router-dom';
import avatar from "../../../assets/img/avatars/05.jpg";

const NavBar = ({ toggleSidebarHandler }) => {
    return (
        <header className="navbar navbar-expand justify-content-end navbar-light bg-light fixed-top shadow-sm px-3 px-xl-4" data-scroll-header data-fixed-element>
            <a className="navbar-brand d-lg-none" href="typography.html">
                <img src={logo} width="116" alt="Finder" />
            </a>
            <button onClick={toggleSidebarHandler} className="navbar-toggler d-block d-lg-none me-3 ms-auto border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#componentsNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item">
                    <a className="nav-link" href="../index.html">
                        <i className="fi-bell align-middle fs-base me-2"></i>
                    </a>
                </li>
                
                <li className="nav-item mx-2 border-end"></li>
            </ul>
            <div className="dropdown order-lg-3">
                <span style={{ width: "40px", height: "50px" }} className="d-inline-block py-1" data-bs-toggle="dropdown">
                    <img className="rounded-circle" src={avatar} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="User" />
                </span>
                <div className="dropdown-menu dropdown-menu-end">
                    <Link to='/student/profile' className="dropdown-item">
                        <i className="fi-user opacity-60 me-2"></i>
                        Profile
                    </Link>
                    <Link  to='/student/change-password'className="dropdown-item">
                        <i className="fi-lock opacity-60 me-2"></i>
                        Password
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link  className="dropdown-item">Help</Link>
                    <a className="dropdown-item">Sign Out</a>
                </div>
            </div>
        </header>
    );
};

NavBar.propTypes = {
    toggleSidebarHandler: PropTypes.func.isRequired,
};

export { NavBar };
