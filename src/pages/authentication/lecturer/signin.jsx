import React ,{useState,useRef}from 'react'
import logo from "../../../assets/img/svg/Login-amico.svg"
import { Link ,useNavigate} from 'react-router-dom'
import { saveToken } from '../../../utils/localstorage'
import { postToBackend } from '../../../utils/backendCalls'
import { token } from '../../../utils/config'
function LoginLecturer() {

    const [loginDetails, setloginDetails] = useState({"lecturerId": "", "password": ""})
    const [message, setMessage] = useState()
    const [show, togleShow] = useState(false)
    const [startSpiner, setSpiner] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const redirect = useNavigate()
    const formRef=useRef()
    const [viewPassword,setViewPassword]=useState(false)

 
    const setValue = (name, value) => {
       loginDetails[name] = value
       setloginDetails({...loginDetails})
    }


const handleLogin=async (e) =>{
   

    e.preventDefault() 
    const isValid = formRef.current.checkValidity();
    
if (isValid){
    togleShow(false)
    //disable button
    setSpiner(true) 
    setSubmitted(true)
    let result = await postToBackend("/api/auth/login/lecturer", loginDetails)


     //post data login datat to backend
    if(result.status !== 200) {
      setMessage(result.data.reason)
    } else {
      setMessage("success")
      //save token
      saveToken(token.lecturerTokenKey, result.data.token)
      //redirect to Lecturer dashboard
      redirect("/lecturer/dashboard")
    } 
    togleShow(true)
    setSubmitted(false)
    setSpiner(false) 
}else{
    formRef.current.classList.add("was-validated")

}

  }
  const handleGoBack = () => {
    redirect(-1); // This will navigate to the previous page
  };


  return (
    <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
    <div className="card card-body" style={{maxWidth: "940px"}}>
        <a onClick={ handleGoBack } className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" >
            <i className="fi-arrow-long-left fs-base me-2"></i>Go back</a>

            
        <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-2 p-sm-5">
                <h2 className="h3 mb-4 mb-sm-5">Hey there!<br/>Welcome back.</h2>
                <img className="d-block mx-auto" src={logo} width="344" alt="Illustartion"/>
                <div className="mt-4 mt-sm-5">
                    Don't have an account?
                    <Link to='/auth/register/lecturer'>
                        Sign up here
                    </Link>
                </div>
            </div>
            <div className="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
 

                
                  
                       
            {
                message  ?  
                        <div className= {`alert alert-danger alert-dismissible fade show   p-3 ${message==='Success'? 'alert-success':'alert-danger'}`} role="alert">

  
                    {message}

                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>{setMessage(null)}} ></button>

                    </div>
                    :""
            }


  <form className="needs-validation " onSubmit={handleLogin} ref={formRef} noValidate>
                    <h3 className='' style={{marginTop:"50px",marginBottom:"15px"}}>Lecturer Login</h3>
                    <div className="mb-4">
                        <label className="form-label mb-2" >lecturer ID </label>
                        <input className="form-control" 
                        
                        
                        type="text" onChange={(val) => {
              setValue("lecturerId", val.target.value)
            }} value={loginDetails.lecturerId} 
                         placeholder="Enter your id number" required/>

                                                </div>
                                                <div className="mb-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <label className="form-label mb-0" >Password</label>
                            <a style={{cursor:"pointer"}}   onClick={(e) => {
              e.preventDefault()
                redirect("/user/request/password-reset", {state: {type:"LECTURER", url: "/auth/login/lecturer"}})
          }} className="fs-sm" >
                                Forgot password?
                            </a>
                        </div>
                        <div  className="password-toggle">
                            <input minLength={4} 
                            pattern="^(?=.*[\W_]).{4,}$" 
                             onChange={(val) => {
                  setValue("password", val.target.value)
            }
            } value={loginDetails.password} 

                             className="form-control"  type={viewPassword?"text":"password"}    name="password"  required/>
                            <label  onClick={()=>{setViewPassword(!viewPassword)}}  className="password-toggle-btn" aria-label="Show/hide password">
                            {
                        viewPassword?<i onClick={()=>{setViewPassword(false)}}  className='fi-eye-on text-muted '></i>:<i onClick={()=>{setViewPassword(true)}} className='fi-eye-off text-muted'></i>
                        }
                        
                            </label>
                        </div>

                                                </div>

                                                {
                            startSpiner?
                            <button type="button" className="btn btn-primary btn-lg w-100">
  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading..
</button>                            :
                            <button className="btn btn-primary btn-lg w-100" type="submit">Login In  </button>

                        } 
                </form>
 
 
         
            </div>
        </div>
    </div>
</div>
  )
}

export {LoginLecturer}