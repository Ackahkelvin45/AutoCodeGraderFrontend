import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from "../../../assets/newlogo.png";
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ toggleSidebar, toggleSidebarHandler }) => {
    const [gradeActive, setGradeActive] = useState(false);
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
                  element.style.marginLeft = '85px';
            
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
        setDashboardActive(pathname === "/student/dashboard");
        setGradeActive(pathname === "/student/grades");
        setViewAssignmentsActive(pathname === "/student/view/assignments");
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
                                            <Link to="/student/dashboard" className={`nav-link fs-sm ${dashboardActive ? "active" : ""}`}><i className="fi fi-grid mb-1 me-2"></i><span>{toggleBar ? "" : "Dashboard"}</span></Link>
                                            <Link to="/student/view/assignments" className={`nav-link fs-sm ${viewAssignmentsActive ? "active" : ""}`}><i className="fi  fi-folders  mb-1 me-2"></i><span>{toggleBar ? "" : "Assignments"}</span></Link>
                                            <Link to="/student/grades" className={`nav-link fs-sm ${gradeActive ? "active" : ""}`}><i className="fi fi-award mb-1 me-2"></i><span>{toggleBar ? "" : "Grades"}</span></Link>



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
