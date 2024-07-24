import {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'ckeditor5/ckeditor5.css';
import Editor from '@monaco-editor/react';
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar';
import { useLocation,useNavigate } from 'react-router-dom';
import { convertBase64, decodeBase64, getExtension, token } from "../../../utils/config"
import { postToBackend } from "../../../utils/backendCalls"
import { getToken } from "../../../utils/localstorage"
import { FilePond } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'



function AddQuestion() {
    const location = useLocation()
    const compiler=location.state.compiler;
    const  assId=location.state. assignmentId;

    let [number, setNumber] = useState()
    const [files, setFiles] = useState([])
    let [requirement, setRequirement] = useState()
    let [detailCond, setDetailed] = useState("File")
    let [explanationExamples, setExplanationExamples] = useState("")
    let [language, setLanguage] = useState("ruby")
    let [solunT, setSolunT] = useState("")
    let [solunTCode, setSolunTCode] = useState("")
    let [solutionPath, setSolutionPath] = useState("")
    let [scriptName, setScriptName] = useState("")
    let [submission, setSubmission] = useState(false)
    const redirect  = useNavigate()
    let extensions = compiler.extension.replaceAll(".","").split(",")

    const detailChange  = (val) => {
        setDetailed(val.target.value)
    }

    const solunTChange = (val) => {
        setSolunT(val.target.value)
    }

    const handleSubmit=async (val) => {
            val.preventDefault()
            setSubmission(true)
            if(!detailCond || !(detailCond === "Type" && explanationExamples )) {
                alert("please provide details to requirement")
            }
            //check for solution text script
            if(!solunT || !(solunT === "Type" && solunTCode )) {
                alert("please provide solution test script by loading a file or typing in the editor")
            }else {
                let assObject = {ext:extensions[0] ,solutionPath, number,AssignmentId: assId, requirement, examples: explanationExamples, solutionScript: solunTCode }
                //submit to backend
                let url = "/coder/lecturer/assignment/task"
                let dataB = await postToBackend(url, assObject, getToken(token.lecturerTokenKey))
                if(dataB.status !== 201) 
                alert(dataB.data.reason)
                else {
                   redirect("/lecturer/task/congrats", {state: {assId, compiler}})
                }
            }
            setSubmission(false)
            
            //form the data
        }
    
  
    const [editorData, setEditorData] = useState('');
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
  return (

    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
    <section   className=" offcanvas-enabled-start row full-section " style={{transition:'all .6s, transform .6s'}}>
    <div className="col-xl-9">
    <NavandSidebar/>

    <div className="border-bottom mb-5 pt-5">
    <h2 className="h5 mb-3 mt-5">Create Assignment{assId}</h2>
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
    <form className="needs-validation"  noValidate>
    <h6>Add quetion</h6>
      <div className="mb-3">
      <div className="mb-3">
        <label className="form-label" >Question number<span className='text-danger'>*</span></label>
       
              
        <input className="form-control" type='number' min={0}  value={number} onChange={(val) => setNumber(val.target.value)} />
         </div>
     
         <label className="form-label" >Genral Requirement(Question)<span className='text-danger'>*</span></label>
        <CKEditor
editor={ClassicEditor}
data={editorData}
config={{
    toolbar: [
        'heading', '|',
        'bold', 'italic', 'underline', 'strikethrough', '|',
        'link', '|',
        'bulletedList', 'numberedList', 'todoList', '|',
        'blockQuote', 'insertTable', '|',
        'code', 'codeBlock', '|',
        'undo', 'redo'
    ],
    codeBlock: {
        languages: [
            { language: 'javascript', label: 'JavaScript' },
            { language: 'java', label: 'Java' },
            { language: 'python', label: 'Python' },
            // Add other languages as needed
        ]
    },
    placeholder: 'Start typing your programming assignment here...',
   

}}
onChange={(event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    console.log({ event, editor, data });
}}

/>                 </div>

<div className="mb-3 px-4">
                      <div className="form-check">
                        <input className="form-check-input" onChange={detailChange} value="File" checked={detailCond === "File"}  name="requirements" id="form-radio-1" type="radio"/>
                        <label className="form-check-label" >File upload</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" id="form-radio-2"   checked={detailCond === "Type"}  value="Type" onChange={detailChange}   name="requirements" type="radio"  />
                        <label className="form-check-label" >Type in Editor</label>
                      </div>
                      
                    </div>

      <div className="mb-3">
        <label className="form-label" > <span className='text-danger'></span></label>

        {detailCond==="File" ?""
      
      :
            <Editor height="60vh" defaultLanguage="javascript"

            theme="vs-dark"
            defaultValue="// some comment" 
            options={options}

                    />
                            
        }
       

                           </div>
                          


        <div className="mb-3">
        <label className="form-label" >Total Mark <span className='text-danger'>*</span></label>
       
              
        <input className="form-control" type='number' min={0} />
         </div>



         <div className="mb-3">
        <label className="form-label" >Mark for Code Correction <span className='text-danger'>*</span></label>
       
              
        <input className="form-control" type='number' min={0} />
         </div>

         <div className="mb-3">
        <label className="form-label" >Mark for Code Style <span className='text-danger'>*</span></label>
       
              
        <input className="form-control" type='number' min={0} />
         </div>

         <div className="mb-3">
        <label className="form-label" >Mark for Cod Efficienty <span className='text-danger'>*</span></label>
       
              
        <input className="form-control" type='number' min={0} />
         </div>
       <div className='w-full d-flex '>
       <button className="btn btn-primary" type="submit">Add Question</button>
       <button className="btn btn-secondary mx-2" type="submit" >Done</button>
       </div>

       


     



    



     
    </form>
  </div>

  </div>
                </div>
                </div>
                </section>
   

  </div>
    </section>
    </div>
  )
}

export default AddQuestion