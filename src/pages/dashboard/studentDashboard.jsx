import { NavandSidebar } from '../../components/dashboard/student/navBarAndSideBar'
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

function StudentDashboard() {
   
  return (
<div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section  className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}} >
    <div className="col-12 ">
    <NavandSidebar/>
    <div className='pt-5 border-bottom  mt-5'>
    <div className="card text-white bg-gradient px-2 py-2 ">
  <div className="card-body">
    <h5 className="card-title text-white ">Welcome Back,Kelvin</h5>
  </div>
</div>
    </div>

    <div className=" mb-5 ">


           <div>


<div className="row  gy-4 gx-3 gx-xxl-4 py-4">





<div className='col-md-6'>
<div className='border rounded p-2 '>

<div className="col pb-3 px-md-3 px-sm-2  pt-md-3 pt-sm-2">
<h6>Current Open Assignments</h6>
            <div className="card bg-light shadow card-hover">
                <div className="card-body p-md-3 p-2">
                    <div className="d-flex justify-content-between align-items-start mb-2 ">
                        <div className="d-flex align-items-center">
                            <span className="badge bg-faded-success rounded-pill fs-sm m-0">Open</span>
                        </div>
                        <div className="dropdown content-overlay" >
                            <button
                                type="button"
                                
                                className={`btn btn-icon btn-light btn-xs rounded-circle shadow-sm `}
                                id="contextMenu"
                                data-bs-toggle="dropdown"
                              
                            >
                                <i className="fi-dots-vertical"></i>
                            </button>
                            
                        </div>
                    </div>
                    <h3 className="h6 card-title pt-1 mb-2">
                        <a href="#" className="text-nav stretched-link text-decoration-none">Functions</a>
                    </h3>
                <div className="fs-base fw-normal">Intoduction  to python</div>
                    <div className="fs-sm mb-1">
                        <span className="text-nowrap me-3">
                            <i className="fi-code text-muted me-1"></i>
                            python
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
</div>


<div className='col-md-6'>
<div className='px-2'>
<div className="card bg-secondary p-2">
<div className='card-header'>
<h5 className="card-title">Upcoming Deadlines</h5>
</div>
     <Calendar
        date={new Date()}
        color="#0d6efd"
        months={2}
        direction="horizontal"
       
      />
    

  </div>
</div>

</div>
<div className='col-md-6'>

<div className='border rounded p-2'>

<div className="col pb-3 px-md-3 px-sm-2  pt-md-3 pt-sm-2">
  <h6>Recent Grade</h6>
  
<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span className='d-flex flex-column'>
    <span className='fw-bold'>Object Oriented Programming</span>
    <span className='text-muted'>Java</span>
     
    </span>
    <span className="badge bg-primary">50/90 </span>
  </li>
 
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span className='d-flex flex-column'>
    <span className='fw-bold'>Object Oriented Programming</span>
    <span className='text-muted'>Java</span>
     
    </span>
    <span className="badge bg-danger">10/90 </span>
  </li>

  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span className='d-flex flex-column'>
    <span className='fw-bold'>Object Oriented Programming</span>
    <span className='text-muted'>Java</span>
     
    </span>
    <span className="badge bg-success">80/90 </span>
  </li>
</ul>
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