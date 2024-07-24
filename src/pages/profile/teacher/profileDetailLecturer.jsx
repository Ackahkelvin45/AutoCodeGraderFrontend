import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useState, useRef } from "react";
import { Collapse } from 'reactstrap';

registerPlugin(FilePondPluginImagePreview);

function ProfileDetailPageLecturer() {
  const [files, setFiles] = useState([]);
  const startRef = useRef();
  const endRef = useRef();

  // State for each collapsible section
  const [isFullnameOpen, setFullNameOpen] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);
  const [isLecturerIdOpen, setLecturerIdOpen] = useState(false);
  const [isUsernameOpen, setUsernameOpen] = useState(false);
  const [isGithubUsernameOpen, setGithubUsernameOpen] = useState(false);

  // Toggle functions for each section
  const toggleFullname = () => setFullNameOpen(!isFullnameOpen);
  const toggleEmail = () => setEmailOpen(!isEmailOpen);
  const toggleLecturerId = () => setLecturerIdOpen(!isLecturerIdOpen);

  const toggleGithubUsername = () => setGithubUsernameOpen(!isGithubUsernameOpen);
  const toggleUsername= () => setUsernameOpen(!isUsernameOpen);


  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-xl-9">
          <NavandSidebar />

          <div className='pt-5 mt-5'>
            <div className="col-12">
              <h1 className="h2" ref={startRef}>Personal Info</h1>
              <div className="mb-2 pt-1">Your personal info is 50% completed</div>
              <div className="progress mb-4" style={{ height: '.25rem' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="row pb-2">
                
                <div className="col-lg-6 col-sm-6 mb-4">
                  <div className="file-uploader bg-secondary mx-2" style={{ height: '160px' }}>
                            <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={false}
          name="avatar_url"

          labelIdle='<i class="d-inline-block fi-camera-plus fs-2 text-muted mb-2 " Style="margin-top:60px"></i><br><span class="fw-bold">Change picture</span>'
            stylePanelLayout="compact"
            styleButtonRemoveItemPosition="left"
            styleButtonProcessItemPosition="right"
            styleLoadIndicatorPosition="right"
            styleProgressIndicatorPosition="right"
            styleButtonRemoveItemAlign={false}
            acceptedFileTypes={['image/png', 'image/jpeg','image/jpg']}
            />
            <a	
              className="filepond--credits"
            aria-hidden="true"
            href="https://pqina.nl/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transform: 'translateY(152px)' }}
            >
            Powered by PQINA
            </a>
                  </div>
                </div>
              </div>

              {/* Full name */}
              <div className="border rounded-3 p-3 mb-4" id="personal-info">
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Full name</label>
                      <div id="name-value">Kelvin Ackah</div>
                    </div>
                    <div className="me-n3" onClick={toggleFullname} title="Edit">
                      <a className="nav-link py-0" href="#name-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <Collapse isOpen={isFullnameOpen}>
                    <input className="form-control mt-3" type="text" data-bs-binded-element="#name-value" data-bs-unset-value="Not specified" value="Ackah Kelvin" />
                  </Collapse>
                </div>

                {/* Email */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Email</label>
                      <div id="email-value">kelvink@email.com</div>
                    </div>
                    <div className="me-n3" onClick={toggleEmail}>
                      <a className="nav-link py-0" href="#email-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <Collapse isOpen={isEmailOpen}>
                    <input className="form-control mt-3" type="email" data-bs-binded-element="#email-value" data-bs-unset-value="Not specified" value="kelvin@email.com" />
                  </Collapse>
                </div>

                  {/* Username */}
                  <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Username</label>
                      <div id="email-value">KK445</div>
                    </div>
                    <div className="me-n3" onClick={toggleUsername}>
                      <a className="nav-link py-0" href="#email-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <Collapse isOpen={isUsernameOpen}>
                    <input className="form-control mt-3" type="email" data-bs-binded-element="#email-value" data-bs-unset-value="Not specified" value="kggg" />
                  </Collapse>
                </div>

                {/* Student ID */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Lecture ID</label>
                      <div id="phone-value">5550107</div>
                    </div>
                    <div className="me-n3" onClick={toggleLecturerId}>
                      <a className="nav-link py-0" href="#phone-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <Collapse isOpen={isLecturerIdOpen}>
                    <input className="form-control mt-3" type="text" data-bs-binded-element="#phone-value" data-bs-unset-value="Not specified" value="5550107" />
                  </Collapse>
                </div>


              
             
                {/* Github Username */}
                <div className="pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-2">
                      <label className="form-label fw-bold">Github Username</label>
                      <div id="github-value">kelvinAckah</div>
                    </div>
                    <div className="me-n3" onClick={toggleGithubUsername}>
                      <a className="nav-link py-0" href="#github-collapse" data-bs-toggle="collapse"><i className="fi-edit"></i></a>
                    </div>
                  </div>
                  <Collapse isOpen={isGithubUsernameOpen}>
                    <input className="form-control mt-3" type="text" data-bs-binded-element="#github-value" data-bs-unset-value="Not specified" value="kelvinAckah" />
                  </Collapse>
                </div>


                <div className="d-flex align-items-center justify-content-between border-top mt-4 pt-4 pb-1">
              <button ref={endRef} className="btn btn-primary px-3 px-sm-4" type="button">Save changes</button>
            </div>
              </div>
            </div>
          </div>
        </div>


        
<div className="col-xl-3 d-none d-xl-block ps-4 ps-xxl-5">
<aside className="sticky-top pt-5">
  <div className="pt-5 mt-5">
    <div className="ps-4 border-start">
      <h3 className="h6">Jump to</h3>

      <a className="nav-link py-1 px-0 fs-sm fw-normal " onClick={()=>{
        startRef?.current.scrollIntoView({
          behavior:'smooth'
        })


      }} style={{cursor:"pointer"}} >start </a>
      <a className="nav-link py-1 px-0 fs-sm fw-normal" onClick={()=>{
        endRef?.current.scrollIntoView({
          behavior:'smooth'
        })
      }} style={{cursor:"pointer"}}>end </a>

    </div>
  </div>
</aside>
</div>
      </section>
    </div>
  );
}

export default ProfileDetailPageLecturer;



