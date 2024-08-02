import React from 'react'
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar'
import Chart from 'react-apexcharts';



function ClassReport() {

    const classData = {
        'Class A': { excellent: 5, good: 10, average: 8, belowAverage: 3 },
        'Class B': { excellent: 7, good: 12, average: 6, belowAverage: 2 },
        'Class C': { excellent: 4, good: 9, average: 11, belowAverage: 5 }
      };
      
    const classNames = Object.keys(classData);
    const series = classNames.map(className => {
    const data = classData[className];
    return {
      name: className,
      data: [
        { x: 'Excellent', y: data.excellent },
        { x: 'Good', y: data.good },
        { x: 'Average', y: data.average },
        { x: 'Below Average', y: data.belowAverage }
      ]
    };
  });


  const options = {
    chart: {
      type: 'bar'
    },
    xaxis: {
      categories: ['Excellent', 'Good', 'Average', 'Below Average']
    },
    title: {
      text: 'Performance Bands by Class'
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
           <Chart options={options} series={series} type="bar" height={400} />
           </div>

 

           </div>
          </div>
        </div>


        

      </section>
    </div>
  )
}

export default ClassReport