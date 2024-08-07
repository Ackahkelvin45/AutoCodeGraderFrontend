import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import logo from "../../../assets/newlogo.png";
import { Link ,useNavigate} from 'react-router-dom';
import avatar from "../../../assets/img/avatars/avatar.png";
import { LecturerContext } from "../../../context/lecturerContext"
import { logout } from "../../../utils/localstorage"



const NavBar = ({ toggleSidebarHandler }) => {
    const {lecturer, authenticated, setAuthenticated} = useContext(LecturerContext)
    console.log(lecturer)

    const navigate = useNavigate()
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
                    <a className="nav-link">
                        <i className="fi-bell align-middle fs-base me-2"></i>
                    </a>
                </li>
                
                <li className="nav-item mx-2 border-end"></li>
            </ul>
            <div className="dropdown order-lg-3">
               
            <span style={{ width: "40px", height: "50px" }} className="d-inline-block py-1" data-bs-toggle="dropdown">
                    <img className="rounded-circle" src={lecturer.profilePic?lecturer.profilePic:avatar} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="User" />
                </span>

           
                <div className="dropdown-menu dropdown-menu-end">
                <div className="d-flex align-items-start border-bottom px-3 py-1 mb-2" style={{width:'16rem'}}>

                <span style={{ width: "40px", height: "50px" }} className="d-inline-block py-1" data-bs-toggle="dropdown">
                    <img className="rounded-circle" src={lecturer.profilePic?lecturer.profilePic:avatar} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="User" />
                </span>          <div className="ps-2">
            <h6 className="fs-base mb-0">{lecturer.name}</h6>
            
            <div className="fs-xs py-2">{lecturer.lecturerId}<br/>{lecturer.email}</div>
          </div>
        </div>
                    <Link to='/lecturer/profile' className="dropdown-item">
                        <i className="fi-user opacity-60 me-2"></i>
                        Profile
                    </Link>
                    <Link  to='/lecturer/change-password' className="dropdown-item">
                        <i className="fi-lock opacity-60 me-2"></i>
                        Password
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item">Help</Link>
                    <span style={{cursor:"pointer"}}
                    
                    onClick={()=> {
                    logout("lecturer")
                    setAuthenticated(false)
                    console.log(authenticated)
                    navigate("/auth/login/lecturer", { replace: true })
                }}
                 className="dropdown-item">Sign Out</span>
                </div>
            </div>
        </header>
    );
};

NavBar.propTypes = {
    toggleSidebarHandler: PropTypes.func.isRequired,
};

export { NavBar };
