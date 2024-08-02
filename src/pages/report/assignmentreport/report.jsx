import React from 'react'
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar'
import Chart from 'react-apexcharts';
import ApexCharts from 'react-apexcharts';


function AssignmentReport() {
    const classData = [
        { name: 'Student 1', score: 85 },
        { name: 'Student 2', score: 92 },
        { name: 'Student 3', score: 75 },
        { name: 'Student 4', score: 88 },
        { name: 'Student 5', score: 62 },
        { name: 'Student 6', score: 45 },
        { name: 'Student 7', score: 35 },
        { name: 'Student 8', score: 58 },
      ];
    const categorizePerformanceBands = (classData) => {
        const bands = {
          bad: 0,
          good: 0,
          veryGood: 0,
          excellent: 0
        };
      
        classData.forEach((student) => {
          const score = student.score;
      
          if (score < 40) bands.bad += 1;
          else if (score < 60) bands.good += 1;
          else if (score < 70) bands.veryGood += 1;
          else bands.excellent += 1;
        });
      
        return bands;
      };

      const bands = categorizePerformanceBands(classData);

      const bandSeries = [
        {
          name: 'Performance Bands',
          data: [
            { x: 'Bad (0-39)', y: bands.bad },
            { x: 'Good (40-59)', y: bands.good },
            { x: 'Very Good (60-69)', y: bands.veryGood },
            { x: 'Excellent (70-100)', y: bands.excellent }
          ]
        }
      ];

  const scoreSeries = [
    {
      name: 'Scores',
      data: classData.map(student => student.score)
    }
  ];


  const bandOptions = {
    chart: {
      type: 'bar'
    },
    xaxis: {
      categories: ['Bad (0-39)', 'Good (40-59)', 'Very Good (60-69)', 'Excellent (70-100)']
    },
    title: {
      text: 'Performance Bands'
    }
  };

  const scoreOptions = {
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: classData.map(student => student.name)
    },
    title: {
      text: 'Distribution of Scores'
    }
  };

 

  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-xl-12">
          <NavandSidebar />
          <div className="border-bottom mb-5 pt-5">
                        <h2 className="h5 mb-3 mt-5">Assignment  Report</h2>
                        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                            <p className="text-muted">
                         performance comparisons across Various Classes                        </p>
                        </div>
                    </div>

          <div className='mt-2 ' >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 gy-4 gx-4 pb-4">
           <div className="col pb-3 px-md-3 px-sm-2">

          
           <a href="#" className="icon-box shadow card card-body card-hover text-center">
  <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
    <i className="fi-grid"></i>
  </div>
  <h3 className="icon-box-title fs-base mb-0">Average Score</h3>
  <p className='fw-bold text-primary'> 60</p>
</a>
                </div>


                <div className="col pb-3 px-md-3 px-sm-2">

          
<a href="#" className="icon-box shadow card card-body card-hover text-center">
<div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
<i className="fi-grid"></i>
</div>
<h3 className="icon-box-title fs-base mb-0">Worst Score</h3>
<p className='fw-bold text-danger'> 60</p>
</a>
     </div>


     <div className="col pb-3 px-md-3 px-sm-2">

          
<a href="#" className="icon-box shadow card card-body card-hover text-center">
<div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
<i className="fi-grid"></i>
</div>

<h3 className="icon-box-title fs-base mb-0">Best Score</h3>
  <p className='fw-bold text-success'>94 </p>
</a>
     </div>


        
           </div> 
           
           <div className='col-12 mb-5 pb-5' >

           <div className="card border-0 shadow p-2" >
           <ApexCharts
        options={bandOptions}
        series={bandSeries}
        type="bar"
        height={350}
      />
           </div>

           
           <div className="card border-0 shadow p-2 mt-5 mb-5">
         
      <ApexCharts
        options={scoreOptions}
        series={scoreSeries}
        type="line"
        height={350}
      />
           </div>
           <div className='mt-5'>
           <h6>Common Errors</h6>
     
<ul className="list-group list-group-flush">
  <li className="list-group-item
   d-flex justify-content-between align-items-center">Wrong function initilization

<span className="badge bg-danger">14</span>
   </li>
   <li className="list-group-item
   d-flex justify-content-between align-items-center">Wrong function initilization

<span className="badge bg-danger">56</span>
   </li>

   <li className="list-group-item
   d-flex justify-content-between align-items-center">Wrong function initilization

<span className="badge bg-danger">89</span>
   </li>

</ul>
           </div>


 
       
           </div>
          </div>
        </div>


        

      </section>
    </div>
  )
}

export default AssignmentReport