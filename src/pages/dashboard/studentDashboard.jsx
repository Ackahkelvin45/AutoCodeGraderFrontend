import {useEffect,useContext,useState}from 'react'
import { NavandSidebar } from '../../components/dashboard/student/navBarAndSideBar'
import { StudentContext } from "../../context/studentContext"
import { useNavigate } from 'react-router-dom'

function StudentDashboard() {
    const redirect = useNavigate()
    const [loading, setLoading] = useState(true)
    const {loadDetails, authenticated, setAuthenticated, student, setStudent} = useContext(StudentContext)
    
    useEffect(()=> {
        loadDetails(setStudent, student,setLoading, setAuthenticated, redirect )
    }, [authenticated])
  return (
<div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section  className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}} >
    <div className="col-12 ">
    <NavandSidebar/>
    <div className='pt-5 border-bottom  mt-5'>
    <div className="card text-white bg-gradient px-2 py-2 ">
  <div className="card-body">
    <h5 className="card-title text-white">Welcome Back,Kelvin</h5>
  </div>
</div>
    </div>

    <div className=" mb-5 ">


           <div>

<div className="row row-cols-xl-3 row-cols-lg-3  row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-xxl-4 py-4">
<div className='px-1 mt-2'>
<div className="card  bg-secondary p-2 ">
  <div className="card-header border-light d-flex justify-content-between">
  <span className="btn btn-icon btn-xs rounded-circle shadow-sm btn btn-translucent-success
  " type="button" id="contextMenu" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-folders   fw-bold"></i></span>
  <h6 className='mx-2 mt-2 card-title'>Assignments</h6></div>
  <div className="card-body">
    <p className="card-text fs-sm mb-0">Number of Assignments Created</p>
    <div>
      <h3 className='my-1'>600</h3>
    </div>
  </div>

</div>
</div>
<div className='px-1 my-2'>
<div className="card  bg-secondary p-2  ">
  <div className="card-header border-light d-flex justify-content-between">
  <span className="btn btn-icon btn-xs rounded-circle shadow-sm btn btn-translucent-warning
  " type="button" id="contextMenu" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-building   fw-bold"></i></span>
  <h6 className='mx-2 mt-2 card-title'>Classes</h6></div>
  <div className="card-body">
    <p className="card-text fs-sm mb-0">Number of classes Teaching</p>
    <div>
      <h3 className='my-1'>600</h3>
    </div>
  </div>

</div>
</div>

<div className='px-1  mt-2'>
<div className="card  bg-secondary p-2  ">
  <div className="card-header border-light d-flex justify-content-between">
  <span className="btn btn-icon btn-xs rounded-circle shadow-sm btn btn-translucent-primary
  " type="button" id="contextMenu" data-bs-toggle="dropdown" aria-expanded="false"><i className="fi-education  fw-bold"></i></span>
  <h6 className='mx-2 mt-2 card-title'>Coures</h6></div>
  <div className="card-body">
    <p className="card-text fs-sm mb-0">Number of Coures Teaching</p>
    <div>
      <h3 className='my-1'>600</h3>
    </div>
  </div>

</div>
</div>

</div>

<div className="row  gy-4 gx-3 gx-xxl-4 py-4">
<div className='col-md-4'>
<div className='border rounded p-2 '>

<button type="button" className="btn btn-primary mb-2 w-100">
  <i className="fi-plus me-2"></i>
  create assignment 
</button>

<button type="button" className="btn btn-dark w-100">
  <i className="fi-folder me-2"></i>
  view assignment 
</button>


</div>
</div>


<div className='col-md-8'>
<div className='px-2'>
<div className="card bg-secondary p-2">
<div className='card-header'>
<h5 className="card-title">Assignment Completion</h5>
</div>
  <div className="card-body">
  <div className='card mb-2 p-2'>
  <div className='card-body'>
    <div  className='mb-0'>
    <h6 className='mb-0'>Introduction to python</h6>
    <div className='fs-xs'>200/400 students submitted</div>
  </div>
  <div className="progress mt-1 mb-1">
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>

  </div>
   
    
  </div>


  <div className='card mb-2 p-2'>
  <div className='card-body'>
    <div  className='mb-0'>
    <h6 className='mb-0'>Introduction to C++</h6>
    <div className='fs-xs'>200/400 students submitted</div>
  </div>
  <div className="progress mt-1 mb-1">
  <div className="progress-bar progress-bar-striped progress-bar bg-danger" role="progressbar" style={{width:'10%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>

  </div>
   
    
  </div>


  <div className='card mb-2 p-2'>
  <div className='card-body'>
    <div  className='mb-0'>
    <h6 className='mb-0'>Introduction to Java</h6>
    <div className='fs-xs'>200/400 students submitted</div>
  </div>
  <div className="progress mt-1 mb-1">
  <div className="progress-bar progress-bar-striped progress-bar bg-accent" role="progressbar" style={{width:'75%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>

  </div>
   
    
  </div>
  </div>
  </div>
</div>

</div>
</div>



          </div>
          
          </div>


        

          
          </div>

          </section>
    
        </div>
  )
}

export default StudentDashboard