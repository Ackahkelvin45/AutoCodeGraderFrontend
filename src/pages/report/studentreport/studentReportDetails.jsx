import React from 'react'
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar'
import Chart from 'react-apexcharts';



function StudentReportDetail() {

    const studentData = {
        name: 'Alice Johnson',
        performance: [80, 85, 90, 95, 92, 88],
        assignments: ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6']
    };


    const chartOptions = {
        chart: {
            type: 'line',
            height: 350
        },
        stroke: {
            width: 2
        },
        title: {
            text: `Performance Trends for ${studentData.name}`,
            align: 'left'
        },
        xaxis: {
            categories: studentData.assignments
        },
        yaxis: {
            title: {
                text: 'Scores'
            }
        },
        markers: {
            size: 5
        },
        tooltip: {
            shared: true,
            intersect: false
        }
    };
    
    
  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-xl-12">
          <NavandSidebar />
          <div className="border-bottom mb-5 pt-5">
                        <h2 className="h5 mb-3 mt-5">Class Comparism  Analysis</h2>
                        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                            <p className="text-muted">
                         performance comparisons across Various Classes                        </p>
                        </div>
                    </div>

          <div className='mt-2 ' >
           
           <div className='col-12 mb-6 pb-5' >

           <div className="card border-0 shadow p-2" style={{marginBottom:"100px"}}>
           <Chart
                options={chartOptions}
                series={[{
                    name: 'Performance',
                    data: studentData.performance
                }]}
                type="line"
                height={350}
            />
           </div>

 

           </div>
          </div>
        </div>


        

      </section>
    </div>
  )
}

export default StudentReportDetail