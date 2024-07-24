import React,{useRef, useState,useEffect} from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar';
import QuestionAccordion from '../../../components/assignment/QuestionAccordion';
import { useParams } from 'react-router-dom';
import { getFromBackend } from '../../../utils/backendCalls'
import { getToken } from '../../../utils/localstorage'
import { token } from '../../../utils/config'


function AssignmentDetailPageLecturer() {
    const startRef=useRef()
    const endRef=useRef()
    const { id } = useParams();
    const [assignment,setAssignment] =useState()

    const options = {
        selectOnLineNumbers: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        colorDecorators: true,
        cursorBlinking: 'blink',
        minimap: {
          enabled: true,
        },
      };

      

      const handleGetAssignmentDetail=async()=>{
        try{
    
          let url = `/user/lecturer/asignment/${id}`

         
          let response = await getFromBackend(url,getToken(token.lecturerTokenKey))
          console.log(response)
          if (response.status === 200) {

            setAssignment(response.data)
          }

        }
        catch(err){
          console.log(err)
        }
      }
    
      useEffect(()=>{
        handleGetAssignmentDetail();
      },[])
  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section   className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}}>
    <div className="col-xl-9">
    <NavandSidebar/>

    <div   ref={startRef} className="border-bottom mb-5 pt-5">
    <h2 className="h5 mb-3 mt-5">Intoduction to proramming {id}</h2>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
              <p className="text-muted">

              Structured Programming 
              </p>
            </div>



          </div>


          <div className="row ">
          <div className='col-12'>

          <div className="card py-2 px-sm-4  shadow-sm">
              <div className="card-body mx-n2">
              

               
                <div className="mb-3 pb-3 border-bottom">
                 
                  <ul className="nav row  row-cols-1 gy-1">
                  <li className="col "><h5 className='m-0 p-0'>Basic Info</h5></li>
                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" href="#"><i className="fi-code mt-1 me-2 align-middle opacity-70"></i>Python</a></li>
                    <li className="col"><a className="nav-link d-inline-block p-0 fw-normal d-inline-flex align-items-start"><i className="fi-calendar mt-1 me-2 align-middle opacity-70"></i>12 December,2024 - 16 Dcember,2024</a></li>
                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" href="#"><i className="fi-alert-octagon mt-1 me-2 align-middle opacity-60"></i>
                    Computer Science,Year 2 
                    
                    </a></li>
                    

                    <li className="col "><h5 className='m-0 p-0'>Submission</h5></li>
                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" href="#"><i className="fi-flag mt-1 me-2 align-middle opacity-60"></i>
                    Submission Status: No attempt
                    
                    </a></li>

                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" href="#"><i className="fi-clock mt-1 me-2 align-middle opacity-60"></i>
                    Time remaining: 5 days
                    
                    </a></li>

                    <li className="col "><h5 className='m-0 p-0'>General Test</h5></li>
                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" ><i className="fi-check-circle mt-1 me-2 align-middle opacity-70"></i>Plagiarism</a></li>

                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" ><i className="fi-check-circle mt-1 me-2 align-middle opacity-70"></i>Documentation</a></li>

                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" ><i className="fi-check-circle mt-1 me-2 align-middle opacity-70"></i>Coding Style Check</a></li>

                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" ><i className="fi-check-circle mt-1 me-2 align-middle opacity-70"></i>Readme Check</a></li>
                    
                    <li className="col "><h5 className='m-0 p-0'>Mode Of Submission</h5></li>
                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" ><i className="fi-download-file mt-1 me-2 align-middle opacity-70"></i>Defualt(file upload)</a></li>

                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" ><i className="fi-github mt-1 me-2 align-middle opacity-70"></i>Github</a></li>

                    <li className="col "><h5 className='m-0 p-0'>Description</h5></li>
                    <li className="col"><a className="nav-link p-0 fw-normal d-flex align-items-start" >is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</a></li>



                 <h5>Quetions</h5>
<div className="accordion" id="accordionExample">

<QuestionAccordion  question={"Question 1"} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.'}/>


<QuestionAccordion  question={"Question 2"} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.'}/>


<QuestionAccordion  question={"Question 3"} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.'}/>


<QuestionAccordion  question={"Question 4"} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat. Corporis pariatur cum dolorem ullam at nulla ex doloribus, ratione quos repellendus aliquid aspernatur obcaecati adipisci maxime id, sed cupiditate.'}/>



</div>
                    




                  </ul>
                </div>

                <div className='mb-3 pb-3 border-bottom'>
                <h5 className='m-0 p-0'>Requirements Code </h5>
                <Editor height="90vh" defaultLanguage="javascript"
                
                theme="vs-dark"
                 defaultValue="// some comment" 
                 options={options}

                 />
                </div>
               
              
              
                
               
              </div>
            </div>

          </div>

</div>
<div ref={endRef}  className='col-12 d-flex justify-content-end'>


</div>


    </div>

    <div className="col-xl-3 d-none d-xl-block ps-4 ps-xxl-5"><aside className="sticky-top pt-5"><div className="pt-5 mt-5"><div className="ps-4 border-start"><h3 className="h6">Jump to</h3>
    
    <span 
    className="nav-link py-1 px-0 fs-sm fw-normal"
    onClick={()=>{
                  startRef?.current.scrollIntoView({
                    behavior:'smooth'
                  })
                }}
    >start </span>
    <span className="nav-link py-1 px-0 fs-sm fw-normal"
    onClick={()=>{
                  endRef?.current.scrollIntoView({
                    behavior:'smooth'
                  })
                }}
    >end </span></div></div></aside></div>
    </section>
    </div>
  )
}

export default AssignmentDetailPageLecturer