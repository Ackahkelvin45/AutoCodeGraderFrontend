import  {useRef, useState}from 'react'
import logo from "../../../assets/img/svg/Login-amico.svg"
import { Link ,useNavigate} from 'react-router-dom'
import { postToBackend } from '../../../utils/backendCalls'
import { saveToken } from '../../../utils/localstorage'
import { token } from '../../../utils/config'

const  LoginStudent=()=> {


const [viewPassword,setViewPassword]=useState(false)
const [loginDetails, setloginDetails] = useState({"studentId": "", "password": ""})
const [message, setMessage] = useState()
const [show, togleShow] = useState(false)
const [startSpiner, setSpiner] = useState(false)
const [submitted, setSubmitted] = useState(false)
const redirect = useNavigate()
const formRef=useRef()



const setValue = (name, value) => {
    loginDetails[name] = value
    setloginDetails({...loginDetails})
 }

 const handleLoginStudent=async (e) =>{
  

    e.preventDefault() 
    const isValid = formRef.current.checkValidity();
    
if (isValid){
    togleShow(false)
    //disable button
    setSpiner(true)
    setSubmitted(true)
    let result = await postToBackend("/api/auth/login/student", loginDetails)
    //post data login datat to backend
    if(result.status !== 200) {
      setMessage(result.data.reason)
    } else {
      setMessage("success")
      //save token
      saveToken(token.studentTokenKey, result.data.token)
      //redirect to student dashboard
      redirect("/student/dashboard")
    }
    togleShow(true)
    setSubmitted(false)
    setSpiner(false)
    console.log(loginDetails)

}
else{
    formRef.current.classList.add("was-validated")
}
  }

  const handleGoBack = () => {
    redirect(-1); // This will navigate to the previous page
  };


  return (
    <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
    <div className="card card-body" style={{maxWidth: "940px"}}>
        <a onClick={ handleGoBack } className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" onclick="window.history.go(-1); return false;">
            <i className="fi-arrow-long-left fs-base me-2"></i>Go back</a>

            
        <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-2 p-sm-5">
                <h2 className="h3 mb-4 mb-sm-5">Hey there!<br/>Welcome back.</h2>
                <img className="d-block mx-auto" src={logo} width="344" alt="Illustartion"/>
                <div className="mt-4 mt-sm-5 mb-0">
                    Sign in as a <Link to='/auth/login/lecturer'>Lecturer</Link>
                </div>
                <div className="mt-0 ">
                    Don't have an account?
                    <Link to='/auth/register/student'>
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

  <form ref={formRef}  noValidate  className="needs-validation " onSubmit={handleLoginStudent} >
  <h3 className='' style={{marginTop:"50px",marginBottom:"15px"}}>Student Login</h3>

                    <div className="mb-4">
                        <label className="form-label mb-2" for="signin-email">Student ID </label>
                        <input className="form-control" 
                        onChange={(val) => {
              setValue("studentId", val.target.value)
            }} value={loginDetails.studentId} 
                        type="text" name="studentId" placeholder="Enter your id number"  required />

                                                </div>
                    <div className="mb-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <label className="form-label mb-0" for="signin-password">Password</label>
                            <a style={{cursor:"pointer"}}  onClick={(e) => {
            e.preventDefault()
            redirect("/user/request/password-reset", {state: {type:"STUDENT", url: "/auth/login/student"}})
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

export {LoginStudent}