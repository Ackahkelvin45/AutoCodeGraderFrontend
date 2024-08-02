import React,{useEffect, useRef, useState} from 'react'
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar'
import AssignmentCard from '../../../components/assignment/assignmentCard'
import { getFromBackend } from '../../../utils/backendCalls'
import { getToken } from '../../../utils/localstorage'
import { token } from '../../../utils/config'
function ViewAssignments() {
  const startRef=useRef()
  const endRef=useRef()
  const [assignments,setAssignment] = useState()
  

  const handleGetAssignments=async()=>{
    try{

      let url = "/coder/lecturer/assignments"
      let response = await getFromBackend(url,getToken(token.lecturerTokenKey))
      console.log(response)
      setAssignment(response.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    handleGetAssignments();
  },[])
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

          <div className="d-flex flex-column align-items-end my-2">
          <div className='row w-100'>
          <div className=" col-md-6 d-flex align-items-center flex-shrink-0">
                <label className="fs-sm me-2 pe-1 text-nowrap" ><i className="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                <select className="form-select form-select-sm" id="sortby">
                  <option>All</option>
                  <option>Completed</option>
                  <option>Not Completed</option>

                  
                </select>
              </div>
              <div className='col-md-6'>

              <div className="input-group mx-3">
  <span className="input-group-text">
    <i className="fi-search"></i>
  </span>
  <input type="text" className="form-control  form-control-sm" placeholder="Search by title"/>
</div>

</div>
          </div>
           

 
              
              <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted my-2"><i className="fi-check-circle "></i><span className="fs-sm mt-n1">148 results</span></div>
            </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 gy-4 gx-4 py-4">
          {
            assignments?.map((assignment,index)=>(
              <AssignmentCard key={index} assignment={assignment}/>
            ))
          }



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

export default ViewAssignments