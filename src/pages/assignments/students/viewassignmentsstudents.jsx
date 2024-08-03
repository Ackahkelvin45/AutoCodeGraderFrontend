import React,{useEffect, useRef, useState} from 'react'
import { NavandSidebar } from '../../../components/dashboard/student/navBarAndSideBar'
import AssignmentCard from '../../../components/assignment/assignmentCard'
import { getFromBackend } from '../../../utils/backendCalls'
import { getToken } from '../../../utils/localstorage'
import { token } from '../../../utils/config'
function ViewAssignmentsStudents() {
  const startRef=useRef()
  const endRef=useRef()
  const [assignments,setAssignment] = useState()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
 

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
      }
  };

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);
  

 
  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section   className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}}>
    <div className="col-xl-9">
    <NavandSidebar/>

    <div   ref={startRef} className="border-bottom mb-5 pt-5">
    <h2 className="h5 mb-3 mt-5">View Assignments</h2>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
              <p className="text-muted">

              Efficiently manage your assignments
              </p>
            </div>



          </div>

          <div className="d-flex flex-column align-items-end mb-2">
          <div className='row w-100'>
          <div className=" col-md-6 d-flex align-items-center flex-shrink-0  mt-2">
                <label className="fs-sm me-2 pe-1 text-nowrap" ><i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                <select className="form-select form-select-sm" id="sortby">
                  <option>All</option>
                  <option>Submiited </option>
                  <option>Not Submitted</option>
                  <option>Open</option>
                  <option>Closed</option>
                  


                  
                </select>
              </div>
              <div className='col-md-6  mt-2'>

              <div className="input-group mx-3">
  <span className="input-group-text">
    <i className="fi-search"></i>
  </span>
  <input type="text" className="form-control  form-control-sm" placeholder="Search by title"/>
</div>

</div>


<div className=" col-md-6 d-flex align-items-center flex-shrink-0 mt-2">
                <label className="fs-sm me-2 pe-1 text-nowrap" ><i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                <select className="form-select form-select-sm" id="sortby">
                  <option selected hidden value=" ">Select Course </option>
                  <option>Java</option>
                  <option>C++</option>
                  <option>Visual Basic</option>

                  
                </select>
              </div>


          </div>
           

 
              
              <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted my-2"><i className="fi-check-circle "></i><span className="fs-sm mt-n1">148 results</span></div>
            </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 gy-4 gx-4 py-4">
        


          <div className="col pb-3 px-md-3 px-sm-2">
            <div className="card bg-secondary card-hover">
                <div className="card-body p-md-3 p-2">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="d-flex align-items-center">
                            <span className="badge bg-faded-success rounded-pill fs-sm ms-2">Open</span>
                        </div>
                        <div className="dropdown content-overlay" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={toggle}
                                className={`btn btn-icon btn-light btn-xs rounded-circle shadow-sm ${dropdownOpen ? 'show' : ''}`}
                                id="contextMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                            >
                                <i className="fi-dots-vertical"></i>
                            </button>
                            <ul className={`dropdown-menu my-1 ${dropdownOpen ? 'show' : ''}`} aria-labelledby="contextMenu">
                               
                                <li>
                                    <span type="button" className="dropdown-item">
                                        <i className="fi-code opacity-60 me-2"></i>
                                        Attempt  Assignment
                                    </span>
                                </li>
                                <li>
                                <span type="button" className="dropdown-item">
                                        <i className="fi-list opacity-60 me-2"></i>
                                        View Report
                                    </span>
                                </li>

                                

                                
                                <li>
                                    <span  type="button" className="dropdown-item">
                                        <i className="fi-chat-circle opacity-60 me-2"></i>
                                     Assignment forum
                                    </span>
                                </li>
                                
                            
                            </ul>
                        </div>
                    </div>
                    <h3 className="h6 card-title pt-1 mb-1">
                        <a href="#" className="text-nav stretched-link text-decoration-none">Functions</a>
                    </h3>
                <div className="fs-base">Intoduction to Python</div>
                    <div className="fs-sm">
                        <span className="text-nowrap me-3">
                            <i className="fi-code text-muted me-1"></i>
                            Python
                        </span>
                        
                    </div>

                    <div className="card-footer fs-sm text-muted">


<div className="fs-sm mt-1">
  
  <span className=" me-3">
      <i className="fi-calendar-alt fs-base text-muted me-1"></i>
     <span className='pt-1'>
     44/55/55-14/44/44
     </span>
  </span>
</div>
</div>
                </div>
            </div>
        </div>

</div>
<div ref={endRef}  className='col-12 d-flex justify-content-end'>

<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a href="#" className="page-link">Prev</a>
    </li>
    <li className="page-item d-sm-none">
      <span className="page-link page-link-static">2 / 5</span>
    </li>
    <li className="page-item d-none d-sm-block">
      <a href="#" className="page-link">1</a>
    </li>
    <li className="page-item active d-none d-sm-block" aria-current="page">
      <span className="page-link">
        2
        <span className="visually-hidden">(current)</span>
      </span>
    </li>
    <li className="page-item d-none d-sm-block">
      <a href="#" className="page-link">3</a>
    </li>
    <li className="page-item d-none d-sm-block">
      <a href="#" className="page-link">4</a>
    </li>
    <li className="page-item d-none d-sm-block">
      <a href="#" className="page-link">5</a>
    </li>
    <li className="page-item">
      <a href="#" className="page-link">Next</a>
    </li>
  </ul>
</nav>
</div>


    </div>

    <div className="col-xl-3 d-none d-xl-block ps-4 ps-xxl-5"><aside className="sticky-top pt-5"><div className="pt-5 mt-5"><div className="ps-4 border-start"><h3 className="h6">Jump to</h3>
    
    <span style={{cursor: 'pointer'}} 
    className="nav-link py-1 px-0 fs-sm fw-normal"
    onClick={()=>{
                  startRef?.current.scrollIntoView({
                    behavior:'smooth'
                  })
                }}
    >start </span>
    <span style={{cursor: 'pointer'}}  className="nav-link py-1 px-0 fs-sm fw-normal"
    onClick={()=>{
                  endRef?.current.scrollIntoView({
                    behavior:'smooth'
                  })
                }}
    >end </span></div></div></aside></div>
    </section>
    </div>
  )
}

export default ViewAssignmentsStudents