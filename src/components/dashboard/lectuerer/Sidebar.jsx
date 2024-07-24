import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from "../../../assets/newlogo.png";
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ toggleSidebar, toggleSidebarHandler }) => {
    const [createAssignmentActive, setCreateAssignmentActive] = useState(false);
    const [dashboardActive, setDashboardActive] = useState(false);
    const [viewAssignmentsActive, setViewAssignmentsActive] = useState(false);
    const [viewClassActive, setViewClassActive] = useState(false);
    const [toggleBar, setToggleBar] = useState(false);

    const handleToggleBar = () => {
        setToggleBar(prev => !prev);

        const element = document.querySelector('.full-section');


        if (!toggleBar) {
            if (element) {
               
                  element.classList.remove('offcanvas-enabled-start');
                  element.style.marginLeft = '83px';
            
              } 
        }else{
            if (element) {
                
                  element.classList.add('offcanvas-enabled-start');
                  element.style.marginLeft = '0px';
                
            }
        }






        
    };


    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        setDashboardActive(pathname === "/lecturer/dashboard");
        setCreateAssignmentActive(pathname === "/lecturer/create/assignment");
        setViewAssignmentsActive(pathname === "/lecturer/view/assignments");
        setViewClassActive(pathname === "/lecturer/view/className");
    }, [pathname]);

    return (
        <>
            <aside className={`offcanvas offcanvas-start offcanvas-expand bg-dark ${toggleSidebar ? "show" : ""}`} id="componentsNav" style={{ width: `${toggleBar ? '100px' : '300px'}`, transition: 'width .6s, transform .6s' }} aria-hidden="true">
                <div className="offcanvas-header pt-3 pb-4 bg-dark d-flex" style={{ justifyContent: 'space-between', display: "flex", alignItems: "stretch", flexDirection: `${toggleBar ? 'column' : 'row'}` }}>
                    <a className="navbar-brand py-2" href="typography.html">
                        <img src={logo} width="116" alt="Finder" />
                    </a>
                    {toggleSidebar ?
                        <button className='btn' onClick={toggleSidebarHandler}><i className={`text-white fi-x`}></i></button>
                        :
                        <button className='btn' onClick={handleToggleBar}><i className={`${toggleBar ? "fi-arrow-long-right" : "fi-arrow-long-left"} text-white`}></i></button>
                    }
                </div>
                <div className="offcanvas-body pt-lg-2 pb-4" data-simplebar="init" data-simplebar-inverse="">
                    <div className="simplebar-wrapper" style={{ margin: '-8px -24px -24px' }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask px-3">
                            <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                                <div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden' }}>
                                    <div className="simplebar-content" style={{ padding: '8px 24px 24px' }}>
                                        <nav className="nav-light flex-column">
                                            <Link to="/lecturer/dashboard" className={`nav-link fs-sm ${dashboardActive ? "active" : ""}`}><i className="fi fi-grid mb-1 mx-2"></i><span>{toggleBar ? "" : "Dashboard"}</span></Link>
                                            <Link to='/lecturer/create/assignment' className={`nav-link fs-sm ${createAssignmentActive ? "active" : ""}`}><i className="fi fi-folder-plus mx-2 mb-1"></i><span>{toggleBar ? "" : "Create assignment "}</span></Link>
                                            <Link to="/lecturer/view/assignments" className={`nav-link fs-sm ${viewAssignmentsActive ? "active" : ""}`}><i className="fi fi-folder mb-1 mx-2"></i><span>{toggleBar ? "" : "View Assignments"}</span></Link>
                                            <Link to='' className={`nav-link fs-sm ${viewClassActive ? "active" : ""}`}><i className="fi fi-footer mb-1 mx-2"></i><span>{toggleBar ? "" : "Class "}</span></Link>
                                        </nav>
                                        <hr className="text-light opacity-15 mx-n4 mt-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div className={`offcanvas-backdrop fade ${toggleSidebar ? "show" : ""}`} style={{ display: toggleSidebar ? "block" : "none" }}></div>
        </>
    );
};

SideBar.propTypes = {
    toggleSidebar: PropTypes.bool.isRequired,
    toggleSidebarHandler: PropTypes.func.isRequired,
};

export { SideBar };
