import { useState, useEffect } from 'react';
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar.jsx';
import DataTable from 'react-data-table-component';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';





  
function ViewStudentSubmission() {
    const [submission, setSubmission] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [pending, setPending] = useState(true);
    const [toggledClearRows, setToggleClearRows] = useState(false);
   

    useEffect(() => {
        // Dummy data
        const dummyData = [
            {
              "id": 1,
              "name": "John Doe",
              "program": "Computer Science",
              "class": "CS101",
              "course": "Introduction to Programming",
              "assignment": {
                "title": "Assignment 1",
                "programming_language": "Java",
                "submission": {
                  "score": 85,
                  "date_submitted": "2024-07-15"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 2,
              "name": "Jane Smith",
              "program": "Computer Science",
              "class": "CS102",
              "course": "Data Structures",
              "assignment": {
                "title": "Assignment 2",
                "programming_language": "Python",
                "submission": {
                  "score": 90,
                  "date_submitted": "2024-07-16"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 3,
              "name": "Emily Johnson",
              "program": "Electrical Engineering",
              "class": "EE201",
              "course": "Circuit Analysis",
              "assignment": {
                "title": "Lab Report",
                "programming_language": "C++",
                "submission": {
                  "score": 78,
                  "date_submitted": "2024-07-17"
                }
              },
              "status": "Pending"
            },
            {
              "id": 4,
              "name": "Michael Brown",
              "program": "Mechanical Engineering",
              "class": "ME301",
              "course": "Thermodynamics",
              "assignment": {
                "title": "Project 1",
                "programming_language": "JavaScript",
                "submission": {
                  "score": 92,
                  "date_submitted": "2024-07-18"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 5,
              "name": "Olivia Davis",
              "program": "Computer Science",
              "class": "CS103",
              "course": "Algorithms",
              "assignment": {
                "title": "Homework 1",
                "programming_language": "Java",
                "submission": {
                  "score": 88,
                  "date_submitted": "2024-07-19"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 6,
              "name": "Aiden Lee",
              "program": "Physics",
              "class": "PH101",
              "course": "Classical Mechanics",
              "assignment": {
                "title": "Lab Report",
                "programming_language": "None",
                "submission": {
                  "score": 80,
                  "date_submitted": "2024-07-20"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 7,
              "name": "Sophia Martinez",
              "program": "Mathematics",
              "class": "MA201",
              "course": "Calculus II",
              "assignment": {
                "title": "Quiz 1",
                "programming_language": "None",
                "submission": {
                  "score": 95,
                  "date_submitted": "2024-07-21"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 8,
              "name": "Jackson Wilson",
              "program": "Computer Science",
              "class": "CS201",
              "course": "Software Engineering",
              "assignment": {
                "title": "Project Proposal",
                "programming_language": "Java",
                "submission": {
                  "score": 76,
                  "date_submitted": "2024-07-22"
                }
              },
              "status": "Late"
            },
            {
              "id": 9,
              "name": "Isabella Anderson",
              "program": "Chemical Engineering",
              "class": "CE301",
              "course": "Chemical Reaction Engineering",
              "assignment": {
                "title": "Assignment 3",
                "programming_language": "Python",
                "submission": {
                  "score": 87,
                  "date_submitted": "2024-07-23"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 10,
              "name": "Ethan Thomas",
              "program": "Civil Engineering",
              "class": "CE101",
              "course": "Structural Analysis",
              "assignment": {
                "title": "Homework 2",
                "programming_language": "None",
                "submission": {
                  "score": 82,
                  "date_submitted": "2024-07-24"
                }
              },
              "status": "Pending"
            },
            {
              "id": 11,
              "name": "Mia Taylor",
              "program": "Computer Science",
              "class": "CS202",
              "course": "Database Systems",
              "assignment": {
                "title": "Database Design",
                "programming_language": "SQL",
                "submission": {
                  "score": 89,
                  "date_submitted": "2024-07-25"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 12,
              "name": "James Harris",
              "program": "Biomedical Engineering",
              "class": "BE201",
              "course": "Biomaterials",
              "assignment": {
                "title": "Literature Review",
                "programming_language": "None",
                "submission": {
                  "score": 91,
                  "date_submitted": "2024-07-26"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 13,
              "name": "Avery Clark",
              "program": "Environmental Engineering",
              "class": "EN301",
              "course": "Environmental Impact Assessment",
              "assignment": {
                "title": "Field Study Report",
                "programming_language": "None",
                "submission": {
                  "score": 83,
                  "date_submitted": "2024-07-27"
                }
              },
              "status": "Pending"
            },
            {
              "id": 14,
              "name": "Benjamin Lewis",
              "program": "Computer Science",
              "class": "CS301",
              "course": "Operating Systems",
              "assignment": {
                "title": "System Design",
                "programming_language": "Java",
                "submission": {
                  "score": 77,
                  "date_submitted": "2024-07-28"
                }
              },
              "status": "Late"
            },
            {
              "id": 15,
              "name": "Charlotte Walker",
              "program": "Mathematics",
              "class": "MA301",
              "course": "Differential Equations",
              "assignment": {
                "title": "Homework 3",
                "programming_language": "None",
                "submission": {
                  "score": 94,
                  "date_submitted": "2024-07-29"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 16,
              "name": "Daniel Young",
              "program": "Physics",
              "class": "PH201",
              "course": "Electromagnetism",
              "assignment": {
                "title": "Experiment Analysis",
                "programming_language": "None",
                "submission": {
                  "score": 88,
                  "date_submitted": "2024-07-30"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 17,
              "name": "Ella King",
              "program": "Computer Science",
              "class": "CS302",
              "course": "Web Development",
              "assignment": {
                "title": "Website Project",
                "programming_language": "JavaScript",
                "submission": {
                  "score": 85,
                  "date_submitted": "2024-07-31"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 18,
              "name": "Lucas Wright",
              "program": "Chemical Engineering",
              "class": "CE302",
              "course": "Process Control",
              "assignment": {
                "title": "Case Study",
                "programming_language": "Python",
                "submission": {
                  "score": 81,
                  "date_submitted": "2024-08-01"
                }
              },
              "status": "Pending"
            },
            {
              "id": 19,
              "name": "Mason Scott",
              "program": "Civil Engineering",
              "class": "CE201",
              "course": "Hydrology",
              "assignment": {
                "title": "Field Report",
                "programming_language": "None",
                "submission": {
                  "score": 79,
                  "date_submitted": "2024-08-02"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 20,
              "name": "Harper Adams",
              "program": "Environmental Engineering",
              "class": "EN302",
              "course": "Sustainable Design",
              "assignment": {
                "title": "Design Proposal",
                "programming_language": "None",
                "submission": {
                  "score": 93,
                  "date_submitted": "2024-08-03"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 21,
              "name": "Evelyn Baker",
              "program": "Biomedical Engineering",
              "class": "BE202",
              "course": "Medical Imaging",
              "assignment": {
                "title": "Research Assignment",
                "programming_language": "None",
                "submission": {
                  "score": 86,
                  "date_submitted": "2024-08-04"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 22,
              "name": "Jack Nelson",
              "program": "Physics",
              "class": "PH301",
              "course": "Quantum Mechanics",
              "assignment": {
                "title": "Theory Paper",
                "programming_language": "None",
                "submission": {
                  "score": 84,
                  "date_submitted": "2024-08-05"
                }
              },
              "status": "Pending"
            },
            {
              "id": 23,
              "name": "Lily Carter",
              "program": "Computer Science",
              "class": "CS303",
              "course": "Artificial Intelligence",
              "assignment": {
                "title": "AI Model",
                "programming_language": "Python",
                "submission": {
                  "score": 91,
                  "date_submitted": "2024-08-06"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 24,
              "name": "Henry Mitchell",
              "program": "Mathematics",
              "class": "MA401",
              "course": "Abstract Algebra",
              "assignment": {
                "title": "Research Paper",
                "programming_language": "None",
                "submission": {
                  "score": 79,
                  "date_submitted": "2024-08-07"
                }
              },
              "status": "Late"
            },
            {
              "id": 25,
              "name": "Megan Ross",
              "program": "Computer Science",
              "class": "CS304",
              "course": "Computer Networks",
              "assignment": {
                "title": "Network Design",
                "programming_language": "None",
                "submission": {
                  "score": 84,
                  "date_submitted": "2024-08-08"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 26,
              "name": "Leo Turner",
              "program": "Mechanical Engineering",
              "class": "ME201",
              "course": "Fluid Mechanics",
              "assignment": {
                "title": "Lab Experiment",
                "programming_language": "None",
                "submission": {
                  "score": 80,
                  "date_submitted": "2024-08-09"
                }
              },
              "status": "Pending"
            },
            {
              "id": 27,
              "name": "Zoe Phillips",
              "program": "Chemical Engineering",
              "class": "CE101",
              "course": "Chemical Process Design",
              "assignment": {
                "title": "Process Design",
                "programming_language": "Python",
                "submission": {
                  "score": 90,
                  "date_submitted": "2024-08-10"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 28,
              "name": "Elijah Green",
              "program": "Civil Engineering",
              "class": "CE202",
              "course": "Construction Management",
              "assignment": {
                "title": "Site Analysis",
                "programming_language": "None",
                "submission": {
                  "score": 86,
                  "date_submitted": "2024-08-11"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 29,
              "name": "Chloe Carter",
              "program": "Biomedical Engineering",
              "class": "BE301",
              "course": "Biomechanics",
              "assignment": {
                "title": "Biomechanics Analysis",
                "programming_language": "None",
                "submission": {
                  "score": 89,
                  "date_submitted": "2024-08-12"
                }
              },
              "status": "Submitted"
            },
            {
              "id": 30,
              "name": "Owen Bailey",
              "program": "Computer Science",
              "class": "CS305",
              "course": "Cybersecurity",
              "assignment": {
                "title": "Security Analysis",
                "programming_language": "Python",
                "submission": {
                  "score": 82,
                  "date_submitted": "2024-08-13"
                }
              },
              "status": "Late"
            }
          ];
          

     
        setTimeout(() => {
            setSubmission(dummyData);
            setPending(false);
        }, 2000); // Simulate a delay
    }, []);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
    };

    const filteredItems = submission.filter(item => {
        const lowercasedFilter = filterText.toLowerCase();
        return (
            item.name.toLowerCase().includes(lowercasedFilter) ||
            item.program.toLowerCase().includes(lowercasedFilter) ||
            item.class.toLowerCase().includes(lowercasedFilter) ||
            item.course.toLowerCase().includes(lowercasedFilter) ||
            item.assignment.title.toLowerCase().includes(lowercasedFilter) ||
            item.assignment.programming_language.toLowerCase().includes(lowercasedFilter) ||
            item.assignment.submission.score.toString().includes(lowercasedFilter) ||
            item.assignment.submission.date_submitted.toLowerCase().includes(lowercasedFilter) ||
            item.status.toLowerCase().includes(lowercasedFilter)
        );
    });

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
            name: <p className='fs-lg d-flex text-center  fw-bolder px-2  m-0'>Program</p>,
            selector: row => (
                <div className='text-center m-0 w-100'>
                    <p className="fs-sm fw-normal m-0 text-wrap ">{row.program}</p>
                </div>
            ),
        },
        {
            name: <p className=' fs-lg d-flex  text-center fw-bolder px-2  m-0'>Class</p>,
            selector: row => (
                <div className='text-center m-0 w-100'>
                    <p className="fs-sm fw-normal m-0  text-wrap">{row.class}</p>
                </div>
            ),
        },
        {
            name: <p className=' fs-lg d-flex  fw-bolder px-2 text-center  m-0'>Course</p>,
            selector: row => (
                <div className='text-center m-0 w-100'>
                    <p className="fs-sm fw-normal m-0  text-center text-wrap">{row.course}</p>
                </div>
            ),
        },
        {
            name: <p className=' fs-lg d-flex  fw-bolder text-center  m-0'>Assignment Title</p>,
            selector: row => (
                <div className='pt-4'>
                    <p className="fs-sm fw-bold m-0  text-center text-wrap">{row.assignment.title}</p>
                    <p className='text-muted mt-1 text-wrap'>{row.assignment.programming_language}</p>
                </div>
            ),
        },
        {
            name: <p className='text-start fs-lg d-flex text-center  fw-bolder  m-0'>Score</p>,
            selector: row => (
                <div className='text-center m-0 w-100'>
                    <p className='fs-sm fw-bold m-0 text-wrap  text-center w-100 '>{row.assignment.submission.score}</p>
                </div>
            ),
        },
        {
            name: <p className='text-center fs-lg d-flex  fw-bolder  m-0'>Date Submitted</p>,
            selector: row => (
                <div className='text-center m-0 w-100 '>
                    <p className='fs-sm fw-bold m-0  text-wrap text-center'>{row.assignment.submission.date_submitted}</p>
                </div>
            ),
        },
        {
            name: <p className='text-center fs-lg d-flex  fw-bolder  m-0'>Status</p>,
            selector: row => (
                <div className='text-center m-0 w-100'>
                    <span className={`badge  fw-bold  ${row.status==="Submitted"?"bg-success":"bg-danger"}`}>{row.status}</span>
                </div>
            ),
        },
    ];



    const exportToExcel = () => {
        const data = submission.map(row => ({
            'Student Name': row.name,
            'Program': row.program,
            'Class': row.class,
            'Course': row.course,
            'Assignment Title': row.assignment.title,
            'Programming Language': row.assignment.programming_language,
            'Score': row.assignment.submission.score,
            'Date Submitted': row.assignment.submission.date_submitted,
            'Status': row.status,
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
        XLSX.writeFile(wb, 'submissions.xlsx');
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [['Student Name', 'Program', 'Class', 'Course', 'Assignment Title', 'Programming Language', 'Score', 'Date Submitted', 'Status']],
            body: submission.map(row => [
                row.name,
                row.program,
                row.class,
                row.course,
                row.assignment.title,
                row.assignment.programming_language,
                row.assignment.submission.score,
                row.assignment.submission.date_submitted,
                row.status,
            ]),
        });
        doc.save('submissions.pdf');
    };

    return (
        <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
            <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
                <div className="col-12">
                    <NavandSidebar />

                    <div className="border-bottom mb-5 pt-5">
                        <h2 className="h5 mb-3 mt-5">View Assignment Submissions</h2>
                        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                            <p className="text-muted">
                                Create assignments efficiently, customize your tasks, set deadlines, and provide clear instructions for your students.
                            </p>
                        </div>
                    </div>

                    <section className="pb-5 mb-md-2" id="forms-input-format">
                        <div className="card border-0 shadow-sm p-2">
                            <div className="d-flex justify-content-between mb-5">
                                <div className=' d-flex align-content-center hover-icon mt-2'>

                                <div className="d-flex justify-content-end">
                                        <i className="fi-dots-vertical mx-2 " style={{ display: `${selectedRows.length > 0 ? '' : "none"}` ,marginTop:"10px"}}></i>
                                        <button className="btn btn-outline-primary  btn-sm  me-2" onClick={exportToExcel}>Export to Excel</button>
                                        <button className="btn btn-outline-secondary btn-sm" onClick={exportToPDF}>Export to PDF</button>
                                    </div>                                </div>
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
                                        onSelectedRowsChange={handleChange}
                                        clearSelectedRows={toggledClearRows}
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
            </section>
        </div>
    );
}

export default ViewStudentSubmission;
