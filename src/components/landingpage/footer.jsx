
import logo from "../../assets/newlogo.png"
function Footer() {
  return (
<div className=" bg-secondary ">
    <footer className="footer bg-secondary pt-5  container content-overlay mt-4 mb-2 mt-lg-5 mb-lg-4 pt-5 pb-md-2  ">
    
      <div className="container pb-2">
        
        <div className="row align-items-center pb-4">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="d-flex flex-sm-row flex-column justify-content-between mx-n2">
              <div className="mb-sm-0 mb-4 px-2"><a className="d-inline-block mb-4" href="real-estate-home-v1.html"><img src={logo} width="116" alt="logo"/></a>
                <ul className="nav flex-column mb-sm-4 mb-2">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="mailto:example@email.com"><i className="fi-mail mt-n1 me-2 align-middle opacity-70"></i>example@email.com</a></li>
                  <li className="nav-item"><a className="nav-link p-0 fw-normal" href="tel:4065550120"><i className="fi-device-mobile mt-n1 me-2 align-middle opacity-70"></i>(406) 555-0120</a></li>
                </ul>
                <div className="pt-2"><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i className="fi-facebook"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i className="fi-twitter"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i className="fi-viber"></i></a><a className="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="#"><i className="fi-telegram"></i></a></div>
              </div>
              <div className="mb-sm-0 mb-4 px-2">
                <h4 className="h5">Products</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Assignment Management </a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Custom Grading Rubric</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Real time Grading Response</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Documentation Check</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Student Assignment History</a></li>

                  






                </ul>
              </div>
              <div className="px-2">
                <h4 className="h5">About</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">About Us</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Help &amp; support</a></li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 px-5">
            <h4 className="h5">Suported Languages</h4>
           
            <hr className="text-dark opacity-10 my-4"/>
            <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#"> C++ </a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">C</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Java</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Php</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Ruby</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">Python</a></li>
                  <li className="nav-item mb-2"><a className="nav-link p-0 fw-normal" href="#">js</a></li>



                  





                </ul>
          </div>
        </div>
        
       
        <div className="text-center fs-sm pt-4 mt-3 pb-2">©  Auto Code Grader 20234. All rights reserved</div>
      </div>
     
    </footer>
    </div>
  )
}

export {Footer}