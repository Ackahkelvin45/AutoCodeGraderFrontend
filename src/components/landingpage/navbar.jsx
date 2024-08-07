import {useEffect,useState} from 'react'
import logo from "../../assets/newlogo.png"
import { Link } from 'react-router-dom';

function Navbar() {
    const [hasScrolled,setHasScrolled]=useState(false)


    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is more than zero
            const isScrolled = window.scrollY > 0;
            
            setHasScrolled(isScrolled);
        };
    
        // Add scroll event listener to the window
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    
    
    }, []);
  return (
    
    <header className={`navbar   navbar-expand-md navbar-light fixed-top justify-content-center ${hasScrolled?"navbar-stuck":""} `}>
       <div className="container px-3" style={{marginLeft:"auto",marginRight:"auto"}}>
       <a className="navbar-brand me-2 me-xl-4" href="real-estate-home-v1.html"><img className="d-block" src={logo} width="116" alt="logo"/></a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
          <Link to="/auth/login/student" className="btn btn-sm text-primary d-none d-lg-block order-lg-3 " href="#signin-modal" data-bs-toggle="modal">
          
          <i className="fi-user me-2"></i>Sign in</Link>
          <Link to="/auth/register/student" className="btn btn-primary btn-sm ms-2 order-lg-3" ><i className="fi-plus me-2"></i>Register<span className="d-none d-sm-inline"> </span></Link>
          <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul className="navbar-nav navbar-nav-scroll" style={{maxHeight: '35rem'}}>
             
         
             
              <li className=""><Link to='/' className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
                
              </li>
              <li className="nav-item "><a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
               
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="real-estate-account-info.html">Blog</a></li>
                  <li><a className="dropdown-item" href="real-estate-account-security.html">Contacts</a></li>
                 
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
               
              </li>
            

              <li className="nav-item dropdown  d-lg-none"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="real-estate-account-info.html">Blog</a></li>
                  <li><a className="dropdown-item" href="real-estate-account-security.html">Contacts</a></li>
                 
                </ul>
              </li>
   
            </ul>
          </div>
        </div>
      </header>
  )
}

export {Navbar}





