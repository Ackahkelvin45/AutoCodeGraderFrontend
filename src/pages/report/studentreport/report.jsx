import React,{useEffect, useState} from 'react'
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar'
import Chart from 'react-apexcharts';
import DataTable from 'react-data-table-component';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';



function StudentReport() {
    const [students, setStudents] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [pending, setPending] = useState(true);
    const [toggledClearRows, setToggleClearRows] = useState(false);

useEffect(() =>{

    const dummyData =  [
        {
          id: 1,
          name: 'Alice Johnson',
          age: 20,
          major: 'Computer Science',
          GPA: 3.8
        },
        {
          id: 2,
          name: 'Bob Smith',
          age: 21,
          major: 'Mathematics',
          GPA: 3.5
        },
        {
          id: 3,
          name: 'Charlie Brown',
          age: 22,
          major: 'Physics',
          GPA: 3.9
        },
        {
          id: 4,
          name: 'David Wilson',
          age: 19,
          major: 'Biology',
          GPA: 3.6
        }
      ];
    setTimeout(() => {
        setStudents(dummyData);
        setPending(false);
    }, 2000)
},[])

const columns = [
    {
        id: 'id',
        name: <p className=' fs-lg d-flex  fw-bolder px-2  m-0 text-center'>Student Name</p>,
        selector: row => (
            <div className='text-center m-0 w-100'>
                <p className="fs-sm fw-bold m-0 text-wrap">{row.name}</p>
            </div>
        ),
    },
    {
        name: <p className='fs-lg d-flex text-center  fw-bolder px-2  m-0'>Major</p>,
        selector: row => (
            <div className='text-center m-0 w-100'>
                <p className="fs-sm fw-normal m-0 text-wrap ">{row.major}</p>
            </div>
        ),
    },
    {
        name: <p className=' fs-lg d-flex  text-center fw-bolder px-2  m-0'>GPA</p>,
        selector: row => (
            <div className='text-center m-0 w-100'>
                <p className="fs-sm fw-normal m-0  text-wrap">{row.GPA}</p>
            </div>
        ),
    },

    {
        name: <p className=' fs-lg d-flex  text-center fw-bolder px-2  m-0'>Actions</p>,
        selector:()=> (
            <div className='text-center m-0 w-100'>
<Link to={`/lecturer/student-detail/student/report`} type="button" className="btn btn-primary btn-sm">
  <i className="fi-file me-2"></i>
  View Report
</Link>
                   
    
            </div>
        ),
    },
    
   
];

const filteredItems = students.filter(item => {
    const lowercasedFilter = filterText.toLowerCase();
    return (
        item.name.toLowerCase().includes(lowercasedFilter) ||
        item.major.toLowerCase().includes(lowercasedFilter) 
      
    );
});


  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-xl-12">
          <NavandSidebar />
          <div className="border-bottom mb-5 pt-5">
                        <h2 className="h5 mb-3 mt-5">Student Performance Report</h2>
                        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                            <p className="text-muted">
                         performance trends of student  </p>
                        </div>
                    </div>

          <div className='mt-2 ' >
           
           <div className='col-12 mb-6 pb-5' >

           <section className="pb-5 mb-md-2" id="forms-input-format">
                        <div className="card border-0 shadow-sm p-2">
                            <div className="d-flex justify-content-end mb-5">
                              
                                <div className="search-box d-flex justify-content-end">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fi-search"></i>
                                        </span>
                                        <input type="text" value={filterText}
                                            onChange={e => setFilterText(e.target.value)} className="form-control" placeholder="Search..." />
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-6 '>
                         




                            </div>
                            <div style={{ overflowX: 'auto' }}>
                                <div>
                                    <DataTable
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                  
        
                                        selectableRows
                                        striped
                                        selectableRowsComponentProps={{
                                            type: 'checkbox',
                                        }}
                                        selectableRowsHighlight
                                        progressPending={pending}
                                        progressComponent={
                                            <div style={{ width: "100%" }}>
                                                <Skeleton style={{ width: "100%", height: "30px" }} />
                                                <Skeleton style={{ width: "100%", height: "30px" }} className='my-3' />
                                                <Skeleton style={{ width: "100%", height: "30px" }} />
                                                <Skeleton style={{ width: "100%", height: "30px" }} className='my-3' />
                                                <Skeleton style={{ width: "100%", height: "30px" }} />
                                                <Skeleton style={{ width: "100%", height: "30px" }} className='my-3' />
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </section>


 

           </div>
          </div>
        </div>


        

      </section>
    </div>
  )
}

export default StudentReport