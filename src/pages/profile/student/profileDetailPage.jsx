import React, { useState, useRef, useContext } from "react";
import { NavandSidebar } from "../../../components/dashboard/student/navBarAndSideBar";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Collapse } from 'reactstrap';
import { StudentContext } from "../../../context/studentContext";
import { postToBackend } from "../../../utils/backendCalls";
import { getToken } from "../../../utils/localstorage";
import { convertBase64, token } from "../../../utils/config";
import { Avatar } from "@files-ui/react";


registerPlugin(FilePondPluginImagePreview);

function ProfileDetailPage() {
  const [files, setFiles] = useState([]);
  const startRef = useRef();
  const endRef = useRef();
  const { student, setStudent } = useContext(StudentContext);
  const [isGithubUsernameOpen, setGithubUsernameOpen] = useState(false);
  const [uploadData, setUploadData] = useState({profilePic: "", githubUserName: "", fileName: "",name:""});
  const [spinner, setSpinner] = useState(false);
  const [info, setInfo] = useState("");
  const [loadSet, setLoading] = useState(false);
  const formRef=useRef()

  const toggleGithubUsername = () => setGithubUsernameOpen(!isGithubUsernameOpen);

  function calculateProfileCompleteness(profile) {
    const totalFields = Object.keys(profile).length;
    const filledFields = Object.values(profile).filter(value => value !== null && value !== "").length;
    return (filledFields / totalFields) * 100;
  }

  console.log(student)

  const profileCompleteness = calculateProfileCompleteness(student);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
 
    const isValid = formRef.current.checkValidity();
  
  if (isValid){
    setLoading(true);
    setSpinner(true);
    const updateUrl = "/user/student/update";
  
    setUploadData(prevState => ({
      ...prevState,
      name: student.name 
       }));
    console.log(uploadData)
    const response = await postToBackend(updateUrl, uploadData, getToken(token.studentTokenKey));
    if (response.status !== 200) {
      console.log("info")
      setInfo(response.data.reason);
    } else {
      setInfo("Information updated");
    }
    setSpinner(false);
    setLoading(false);
  }
  else{
    
    formRef.current.classList.add("was-validated")
  
  }

  };

  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-xl-9">
          <NavandSidebar />

          <div className='pt-5 mt-5'>
          {
            info?
            <div className="alert alert-success d-flex p-2 justify-content-between" role="alert">
            <div className="d-flex">
  <i className="fi-check-circle me-2 me-sm-3 lead"></i>
  <div>Profile Updated Successfully </div>
</div>
  <button type="button" onClick={()=>{setInfo("")}} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            :""

          }
            <form  onSubmit={handleSubmit} ref={formRef}   noValidate  className="col-12 needs-validation">
              <h1 className="h2" ref={startRef}>Personal Info</h1>
              <div className="mb-2 pt-1">Your personal info is {profileCompleteness.toFixed(2)}% completed</div>
              <div className="progress mb-4" style={{ height: '.25rem' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${profileCompleteness.toFixed(2)}%` }} 
                      aria-valuenow={profileCompleteness.toFixed(2)} 
                       aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div  className="row pb-2">
                <div className="col-lg-6 col-sm-6 mb-4">
                  <div className="file-uploader bg-secondary mx-2" style={{ height: '160px' }}>
                  
                    <Avatar onChange={ async (val) => {
                        if(val.size <= 1024 * 1024 * 3) {
                        let result = await convertBase64(val)
                        setStudent({...student,'profilePic':result})
                        setUploadData({...uploadData, profilePic:result, fileName:val.name})
                       
                        }else
                            alert('size too big, max size should be less than 3mb')
                    }}
                    emptyLabel="upload pic   max size 3mb"
                    src={student.profilePic} 
                    variant="square" 
                    style={{width:"100%", height:"100%",objectFit:"cover"}}
                    accept="image/*"
                    changeLabel="Change Profile Picture"
                    />
               
                  </div>
                </div>
              </div>

              {/* Full name */}
              <div className="border rounded-3 p-3 mb-4" id="personal-info">
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Full name</label>
                      <div id="name-value">{student.name}</div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Email</label>
                      <div id="email-value">{student.email}</div>
                    </div>
                  </div>
                </div>

                {/* Student ID */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Student ID</label>
                      <div id="phone-value">{student.studentId}</div>
                    </div>
                  </div>
                </div>

                {/* Index Number */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Index Number</label>
                      <div id="phone-value">{student.index}</div>
                    </div>
                  </div>
                </div>

                {/* Program */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Program</label>
                      <div id="company-value">{student.program}</div>
                    </div>
                  </div>
                </div>

                {/* Class */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Class</label>
                      <div id="bio-value">{student.class}</div>
                    </div>
                  </div>
                </div>

                {/* Github Username */}
                <div className="pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Github Username</label>
                      <div id="github-value">{student.githubUserName }</div>
                    </div>
                    <div className="me-n3" onClick={toggleGithubUsername}>
                      <a className="nav-link py-0" href="#github-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <Collapse isOpen={isGithubUsernameOpen}>
                    <input
                      onChange={(val) => {
                        setStudent({ ...student, githubUserName: val.target.value });
                        setUploadData({ ...uploadData, githubUserName: val.target.value });
                      }}
                      className="form-control mt-3"
                      type="text"
                     
                      data-bs-binded-element="#github-value"
                      data-bs-unset-value="Not specified"
                      value={student.githubUserName}
                    />
                  </Collapse>
                </div>

                <div className="d-flex align-items-center justify-content-between border-top mt-4 pt-4 pb-1">
                {
                  spinner?
                  <button ref={endRef} className="btn btn-primary px-3 px-sm-4" type="button">
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Saving...</button>

                  :
                  <button ref={endRef} className="btn btn-primary px-3 px-sm-4" type="submit">Save changes</button>


                }
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-xl-3 d-none d-xl-block ps-4 ps-xxl-5">
          <aside className="sticky-top pt-5">
            <div className="pt-5 mt-5">
              <div className="ps-4 border-start">
                <h3 className="h6">Jump to</h3>
                <a className="nav-link py-1 px-0 fs-sm fw-normal" onClick={() => startRef.current.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: "pointer" }}>Start</a>
                <a className="nav-link py-1 px-0 fs-sm fw-normal" onClick={() => endRef.current.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: "pointer" }}>End</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProfileDetailPage;
