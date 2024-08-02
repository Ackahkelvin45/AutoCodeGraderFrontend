import{useRef, useState,useEffect} from 'react'

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import {NavandSidebar} from '../../../components/dashboard/lectuerer/navBarAndSideBar.jsx'

import { getToken } from "../../../utils/localstorage.js"

import {getFromBackend, putTOBackend ,postToBackend} from '../../../utils/backendCalls.js';
import { convertToDateTimeLocalString, token } from '../../../utils/config.js';
import { useNavigate ,useParams} from 'react-router-dom';
import CongratsEditModal from '../../../components/assignment/congratsEditModal.jsx';



const fetchRequiredData = async (compilersState, programState) => {
  let compilers = await getFromBackend("/api/compilers")
  if (compilers.status === 200) {
      compilersState(compilers.data)
  } else {
      alert(compilers.data.reason)
  }
  let programs = await getFromBackend("/api/programs")
  if(programs.status === 200) {
      programState(programs.data)
  } else {
      alert(programs.data.reason)
  }
}



function EditAssignment() {
  const [modal, setModal] = useState(false);
  const toggleModal=()=>{
    setModal(!modal)
  }


  const { id } = useParams();



    const auth = getToken(token.lecturerTokenKey)
  const startRef=useRef()
  const endRef=useRef()
 
 const [assignmentID,setAAssignmentID]=useState()
 const [comp,setComp]=useState()



  const [date,setDate]=useState({
    start:new Date(),
    end:new Date(new Date().getTime() + 5 * 60000)
    })

  



    let [gitMode, setGithubSubMod] = useState(false)
    
    
    let [Clases,setClasses ] = useState([])
    let [selectedClass, setSelectedClass] = useState()
    let [programs, setPrograms] = useState([])
    let [selectedProgram, setSelectedProgram] = useState()
    let [compilers, setCompilers] = useState([])
    let [plagiarism, setPlagiarism] = useState(false)
    let [documentation, setDocumentation] = useState(false)
    let [codingStandards, setCodingStandards] = useState(false)
    let [readme, setReadme] = useState(false)
    let [objectives, setObjectives] = useState("")
    let [repository, setRepository] = useState("")
    let [loadingClass, setLoadingClass] = useState(true)
    let [startSpiner, setStartSpiner] = useState(false)
    let [CompilerId, setCompiler] = useState("")
    let [selectedCompiler,setSelectedCompiler] = useState()
    let [ClassId, setAssClass] = useState("")
    let [title, setTitle] = useState("")
    let [courses, setCourses] = useState([])
    let [selectedCourse, setSelectedCourse] = useState("")
    let [CourseId, setCourse] = useState("")
    let [loadingCourses, setLoadingCoures] = useState(false)
    let [courseSpiner, loadSpiner] = useState(false)
    let [submission, setSubmission] = useState(false)
    let redirect = useNavigate()
    const formRef=useRef(null)
    const modalRef=useRef(null)
    


  


const handleGetAssignment=async() => {
    try{
        let url = `/coder/lecturer/assignment/${id}`;
        console.log(url);
        let response = await getFromBackend(url, getToken(token.lecturerTokenKey))
        if (response.status === 200) {
           console.log(response)
           setTitle(response.data.title);
           setSelectedProgram(response.data.Course.ProgramId)
           setSelectedClass(response.data.Classes[0].id)
           setAssClass(response.data.Classes[0].id)
           setSelectedCourse(response.data.CourseId)
           setCourse(response.data.CourseId)
           setSelectedCompiler(response.data.Compiler.id)
           setCompiler(response.data.Compiler.id)
           setDate({
            start: new Date(response.data.startDate),
            end: new Date(response.data.endDate)
 
           })
           setGithubSubMod(response.data.gitMode)



           let url ="/api/program/classes"
           let classes = await postToBackend(url, {programId: response.data.Course.ProgramId})
           console.log(classes)
           if(classes.status === 200) {
               setLoadingClass(false)
               setClasses(classes.data)
           } else {
               alert(response.data.reason)
           }
           setRepository(response.data.repository)
           setObjectives(response.data.objectives)
           setPlagiarism(response.data.AssignmentRequirements[0].plagiarism)
           setDocumentation(response.data.AssignmentRequirements[0].documentation)
           setCodingStandards(response.data.AssignmentRequirements[0].codingStandard)
           setReadme(response.data.AssignmentRequirements[0].readme)



           let courses = await getFromBackend(`/api/program/class/courses/${response.data.Classes[0].id}`)
           if(courses.status === 200) {
               setCourses(courses.data)
               console.log(courses.data)
               setLoadingCoures(false)
           } else {
               alert(courses.data.reason)
           }
           loadSpiner(false)
           
         
        } else {
            console.log(response.data.reason)
        }



    }
    catch(e){
        console.log(e)
    }
}


useEffect(() => {
  console.log(id)
    fetchRequiredData(setCompilers, setPrograms)
    handleGetAssignment()
}, [])



const handleSubmit=async (val) => {
  val.preventDefault()
 
  const isValid = formRef.current.checkValidity();

if (isValid){

setSubmission(true)
      let start =date.start
      let end = date.end    
      let assignment = {startDate:start, endDate:end,title,objectives,  plagiarism, documentation, codingStandards,gitMode,readme,  repository,CourseId,CompilerId, ClassId}
      console.log(assignment)
     
      //send assignment to backend
      let url = `/coder/lecturer/assignment/${id}`
      let response = await putTOBackend(url, assignment, getToken(token.lecturerTokenKey))
      console.log(response)
      if(response.status === 201){
        console.log(response)
          //find the compiler with the id
          // let compiler = null
          // for(const lang of compilers) {
          //     if(CompilerId === lang.id) {
          //         compiler = {...lang}
          //         console.log(compiler)
          //         setComp(compiler);
          //         break
          //     } 
          // }
          // setAAssignmentID(response.data.id)
          // console.log(response.data.id)
          // setSubmission(false)
          // console.log(assignmentID,comp)
          

          // setClasses([]);
          // setPrograms([]);
          // setCompilers([]);
          // setPlagiarism(false);
          // setDocumentation(false);
          // setCodingStandards(false);
          // setReadme(false);
          // setObjectives("");
          // setRepository("");
          // setLoadingClass(true);
       
          // setCompiler("");
          // setAssClass("");
          // setTitle("");
          // setCourses([]);
          // setCourse("");
          
          // setSubmission(false);
          // setDate({
          //   start: new Date(),
          //   end: new Date(new Date().getTime() + 5 * 60000),
          // });
      
          setModal(true)
          
     
          
          
     
      
      }
      else {
          setSubmission(false)
      }
  
}else{

  formRef.current.classList.add("was-validated")

}

}



    
  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section   className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}}>
    <div className="col-xl-9">
    <NavandSidebar/>
    {
      assignmentID && comp&&
      
   <CongratsEditModal modal={modal} toggleModal={toggleModal} assignmentId={assignmentID} compiler={comp}/>

    }
    
    <div className="border-bottom mb-5 pt-5">
    <h2 className="h5 mb-3 mt-5">Create Assignment</h2>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
              <p className="text-muted">
             create assignments efficiently , customize your tasks, set deadlines, and provide clear instructions for your students

              </p>
            </div>
          </div>


          <section className="pb-5 mb-md-2 " id="forms-input-format">
            <div className="card border-0 shadow-sm p-2">
            
              <div className="card-body">
                <div className="tab-content">

             
                  <div >
                    <form onSubmit={handleSubmit}   className="needs-validation" ref={formRef}  noValidate>
                      <div ref={startRef} className="mb-3">
                        <label className="form-label" >Assignment Title <span className='text-danger'>*</span></label>
                        <input className="form-control" type="text" value={title} onChange={(val) => setTitle(val.target.value)}  required placeholder="introduction to programming"/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" >Program <span className='text-danger'>*</span></label>
                        <select className="form-select"  id="select-input"  onChange={async (val) => {
                        val.preventDefault()
                        //set program id
                        //set loadingClass to false
                        setLoadingClass(false)
                        //set startSpiner to true
                        setStartSpiner(true)
                        //get classes for the program
                        let url ="/api/program/classes"
                        let response = await postToBackend(url, {programId: val.target.value})
                        console.log(response)
                        if(response.status === 200) {
                            setLoadingClass(false)
                            setClasses(response.data)
                        } else {
                            alert(response.data.reason)
                        }
                        setStartSpiner(false)
                        
        
                    }} >
                          {programs.map(val => {
                            return (
                              <option key={val.id}  selected={val.id===selectedProgram ?true:false} value={val.id}>{val.programName}</option>)
                        })}
                        </select>                      </div>



                        <div className="mb-3">
                        <label className="form-label" >Class <span className='text-danger'>*</span></label>
                        <select className="form-select" id="select-input"
                        
                        disabled={loadingClass} onChange={async (val) => {
                            setAssClass(val.target.value)
                            setLoadingCoures(true)
                            loadSpiner(true)
                            //load courses
                            let courses = await getFromBackend(`/api/program/class/courses/${val.target.value}`)
                            if(courses.status === 200) {
                                setCourses(courses.data)
                                console.log(courses.data)
                                setLoadingCoures(false)
                            } else {
                                alert(courses.data.reason)
                            }
                            loadSpiner(false)
                        }}  size="lg"  aria-label="Default selectexamplaple">
                            {Clases.map(val => {
                                return(<option key={val.id} selected={val.id===selectedClass ?true:false} value={val.id}>{val.className}</option>)
                            })}
                    
                        </select>                      </div>


                        <div className="mb-3">
                        <label className="form-label" >Course<span className='text-danger'>*</span></label>
                        <select className="form-select" id="select-input"disabled={loadingCourses} onChange={async (val) => {
                            setCourse(val.target.value)
                        }}  size="lg"  aria-label="Default selectexamplaple">
                            {courses.map(val => {
                                return(<option key={val.id} selected={val.id===selectedCourse ?true:false}  value={val.id}>{val.courseName}({val.courseCode})</option>)
                            })}
                        </select>                      </div>


                        <div className="mb-3">
                        <label className="form-label" >Programming Language <span className='text-danger'>*</span></label>
                        <select className="form-select" id="select-input"  required onChange={(val) => {
                           setCompiler(val.target.value)
                        }} >
                          {compilers.map(val => {
                                return (<option key={val.id} selected={val.id===selectedCompiler ?true:false} value={val.id}>{val.name}</option>)
                            })}
                            
                        </select>                      </div>
                     


                        <div className="row mb-3">
                        <div className="col-md-6 px-md-2 mb-3">
                          <label className="form-label" >Start Date and Time <span className='text-danger'>*</span></label>

                          <Flatpickr className="form-control"
                          value={date.start}
                           required
                            
                           onChange={([date]) => setDate((prev) => ({ ...prev, start: date }))}

                            options={{
                      enableTime: true,
                      dateFormat: "Y-m-d H:i", 
                      minDate: date.start,

                    }}

                           
                            />

         
                        </div>
                       
                        <div className="col-md-6 ">
                          <label className="form-label">End Date and Time <span className='text-danger'>*</span></label>
                          <Flatpickr className="form-control"
                          value={date.end}
                           required
                            
                           onChange={([date]) => setDate((prev) => ({ ...prev, end: date }))}

                            options={{
                      enableTime: true,
                      dateFormat: "Y-m-d H:i", 
                      minDate:date.start ? new Date(date.start.getTime() + 1 * 60000) : new Date(), // Set the minimum date to 5 minutes after the start date,
                      
                    }}

                           
                            />
                        </div>
                      </div>

                      
                      <strong>General Test</strong>
                      <div className="mb-3 mx-4">
                      
                    <div className="form-check form-switch mb-1 px-4">
                      <input className="form-check-input" checked = {plagiarism}
                        onChange={() => setPlagiarism(!plagiarism)}  type="checkbox"/>
                      <label className="form-check-label" >Plagiarism</label>
                    </div>
                    <div className="form-check form-switch mb-1 px-4">
                      <input className="form-check-input"    checked = {documentation}
                        onChange={() => setDocumentation(!documentation)} id="form-switch-2" type="checkbox" />
                      <label className="form-check-label" >Documentation</label>
                    </div>
                    <div className="form-check form-switch mb-1 px-4">
                      <input className="form-check-input" id="form-switch-3"  checked = {codingStandards}
                        onChange={() => setCodingStandards(!codingStandards)} type="checkbox" />
                      <label className="form-check-label" >Coding Style Check</label>
                    </div>

                    <div className="form-check form-switch px-4">
                      <input className="form-check-input"   checked = {readme}
                        onChange={() => setReadme(!readme)}id="form-switch-3" type="checkbox" />
                      <label className="form-check-label" >Readme Check</label>
                    </div>
                  </div>




                  <strong>Mode of Submission</strong>
                      <div className="mb-3 mx-4">


                      <div className="form-check  mb-1 ">
  <input className="form-check-input" id="form-radio-1"  onClick={() => setGithubSubMod(!gitMode)}
                        
                        checked={gitMode}  type="radio" name="github"/>
  <label className="form-check-label">Github</label>
</div>


<div className="form-check  mb-1 ">
  <input className="form-check-input" id="form-radio-1"   checked 
                        
                        disabled  type="radio" name="file"/>
  <label className="form-check-label">File Upload</label>
</div>


<div className="form-check  mb-1 ">
  <input className="form-check-input" id="form-radio-1"   checked 
                        
                        disabled  type="radio" name="ide"/>
                          <label className="form-check-label">Online IDE</label>

                        </div>


</div>














      {gitMode &&   <div  className="mb-3">
                        <label className="form-label" >Github Submission Repository <span className='text-danger'>*</span></label>
                        <input className="form-control" type="text"   value={repository} onChange={(val) => setRepository(val.target.value)} required={gitMode}  placeholder="introduction to programming"/>
                      </div> }

                      <div ref={endRef} className="mb-3">
                        <label className="form-label" >0bjectives</label>
                        <textarea className="form-control"  value={objectives} onChange={(val) => setObjectives(val.target.value)} id="textarea-input" rows="5" placeholder='Requirements!'></textarea>                      </div>

                      {
                        submission?
                        <button className="btn btn-primary" type="button" >
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>

                        Editing...</button>:
                        <button className="btn btn-primary" type="submit" >Edit Assignment</button>
                        
                    
                      }
                    </form>
                  </div>
                 
                
                 
                  





                </div>
              </div>
            </div>
          </section>


          
          </div>

          <div className="col-xl-3 d-none d-xl-block ps-4 ps-xxl-5">
          <aside className="sticky-top pt-5">
            <div className="pt-5 mt-5">
              <div className="ps-4 border-start">
                <h3 className="h6">Jump to</h3>

                <a style={{cursor: 'pointer'}} className="nav-link py-1 px-0 fs-sm fw-normal" onClick={()=>{
                  startRef?.current.scrollIntoView({
                    behavior:'smooth'
                  })
                }}>start </a>
                <a style={{cursor: 'pointer'}} className="nav-link py-1 px-0 fs-sm fw-normal" onClick={()=>{
                  endRef?.current.scrollIntoView({
                    behavior:'smooth'
                  })
                }}>end </a>

              </div>
            </div>
          </aside>
        </div>
          </section>
    
        </div>
  )
}

export default EditAssignment