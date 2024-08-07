import{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DeleteAsignmentModal from './deleteAssignmentModal';
function AssignmentCard({assignment}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [modal,setShowModal] = useState(false);
    const toggleModal=()=>{
        setShowModal(!modal);
    }

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

    const formatISODate = (isoDateString) => {
        // Create a Date object from the ISO date string
        const date = new Date(isoDateString);
      
        // Define formatting options
        const options = {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true, // Use 12-hour time format
        };
      
        // Convert to desired format
        return date.toLocaleString('en-GB', options).replace(',', '');
      };
    return (
        <>
            <DeleteAsignmentModal modal={modal} toggleModal={toggleModal} assignment={assignment}/>
       
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
                                    <Link to={`/lecturer/view/${assignment.id}`} type="button" className="dropdown-item">
                                        <i className="fi-eye-on opacity-60 me-2"></i>
                                        View details
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/lecturer/${assignment.id}/submission`} type="button" className="dropdown-item">
                                        <i className="fi-eye-on opacity-60 me-2"></i>
                                        View submissions
                                    </Link>
                                </li>
                                <li>
                                <Link to={`/lecturer/${assignment.id}/report`} type="button" className="dropdown-item">
                                        <i className="fi-list opacity-60 me-2"></i>
                                        View report
                                    </Link>
                                </li>

                                

                                
                                <li>
                                    <Link to='/intoduction-to-python/chat' type="button" className="dropdown-item">
                                        <i className="fi-chat-circle opacity-60 me-2"></i>
                                     Assignment forum
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/lecturer/edit/assignment/${assignment.id}`} type="button" className="dropdown-item">
                                        <i className="fi-pencil opacity-60 me-2"></i>
                                        Edit assignment
                                    </Link>
                                </li>
                                
                                <li>
                                    <button onClick={toggleModal} type="button" className="dropdown-item text-danger">
                                        <i className="fi-trash opacity-60 me-2"></i>
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 className="h6 card-title pt-1 mb-1">
                        <a href="#" className="text-nav stretched-link text-decoration-none">{assignment.title}</a>
                    </h3>
                <div className="fs-base">{assignment.Course.courseName}</div>
                    <div className="fs-sm">
                        <span className="text-nowrap me-3">
                            <i className="fi-code text-muted me-1"></i>
                            {assignment.Compiler.name}
                        </span>
                        
                    </div>

                    <div className="fs-sm">
                      
                        <span className=" me-3">
                            <i className="fi-calendar-alt fs-base text-muted me-1"></i>
                            { formatISODate(assignment.startDate)}
                            -
                           
                            
                            {
                            formatISODate(assignment.endDate)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AssignmentCard;
