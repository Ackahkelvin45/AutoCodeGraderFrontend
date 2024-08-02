import React from 'react'
import { NavandSidebar } from '../../components/dashboard/lectuerer/navBarAndSideBar'
import { Link } from 'react-router-dom'

function Index() {
  

  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-xl-12">
          <NavandSidebar />
          <div className="border-bottom mb-5 pt-5">
                        <h2 className="h5 mb-3 mt-5">Report Dashboard</h2>
                        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                            <p className="text-muted">
                            Access comprehensive reports to analyze assignment performance, compare student outcomes, and review overall class statistics.                            </p>
                        </div>
                    </div>

          <div className='mt-2'>
           
           <div className='col-12'>


           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 gy-4 gx-4 pb-4">
           <div className="col pb-3 px-md-3 px-sm-2">

          
                        <div className="icon-box border rounded-md p-2 text-center shadow">
                        <div className="icon-box-media bg-faded-primary text-primary mb-3 mx-auto">
    <i className=" fi fi-users"></i>
  </div>
  <h3 className="icon-box-title fs-base">Number of Classes</h3>
  <p className="fw-bold">200</p>
                </div>
                </div>

                <div className="col pb-3 px-md-3 px-sm-2">

                <div className="icon-box border rounded-md p-2 text-center shadow">
                        <div className="icon-box-media bg-faded-primary text-primary mb-3 mx-auto">
    <i className="fi-file"></i>
  </div>
  <h3 className="icon-box-title fs-base">Total Number of Assignments</h3>
  <p className="fw-bold">200</p>
                </div>

</div>
            
           </div> 
   
   <h6>Select Desired Report</h6>
 
<ul className="list-group">
  <Link  to="/lecturer/report/class" className="list-group-item d-flex justify-content-between align-items-center">
    <span>
      <i className="fi-users text-muted me-2"></i>
      Class Comparism Report 
    </span>
<i className='fi fi-eye-on'></i>
  </Link>
 
  <Link to='/lecturer/student/report' className="list-group-item d-flex justify-content-between align-items-center">
    <span>
      <i className="fi-user text-muted me-2"></i>
      Student Performance
    </span>
<i className='fi fi-eye-on'></i>  </Link>
</ul>

           </div>
          </div>
        </div>


        

      </section>
    </div>
  )
}

export default Index