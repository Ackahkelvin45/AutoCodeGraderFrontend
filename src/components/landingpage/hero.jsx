import arrow from "../../assets/img/intro/swirly-arrow.svg"
import image2 from '../../assets/img/hero/code.jpg'
import image3 from '../../assets/img/hero/nocode.jpg'
import image4 from "../../assets/img/hero/lady.jpg"

const  Hero=()=> {
  return (
    <section className="container content-overlay mt-4 mb-2 mt-lg-5 mb-lg-4 pt-5 pb-md-2">
    <div className="d-none d-xl-block position-absolute top-0 start-0 h-100 bg-secondary" style={{width: "67%", borderBottomRightRadius: ".75rem"}}></div>
    <div className="d-xl-none position-absolute top-0 start-0 w-100 h-100 bg-secondary"></div>
    <div className="container content-overlay mt-4 mb-2 mt-lg-5 mb-lg-4 pt-5 pb-md-2">
    <div>

    </div>
    <div className='row '>
    <div className='col-md-6'>
    <h5 className=" text-center text-md-start " >
      Create, Grade, and Provide Detailed Feedback on Coding Assignments Using Auto Code Grader
      </h5>
      <p className=''>
      Empower Lecturers: Effortlessly Create, Grade, and Provide Detailed Feedback on Assignments, Facilitate Seamless and Convenient Student Submissions
      <br/>
      Empower Students: Easily submit assignments and receive prompt feedback. Streamlined for students, ensuring quick response times and seamless submission experiences</p>


    </div>
   

    </div>
     
      
      <div className="row">
        <div className="d-none d-md-block col-md-2 pt-4 mt-4"><img src={arrow} width="120" alt="Arrow"/></div>
        <div className="col-md-10   d-md-flex mt-md-n4">
         
         
          
          <div className="d-block hover-img-scale position-relative zindex-5 mt-md-5 mx-auto me-md-n5 mb-4 mb-md-0" style={{maxWidth: "633px"}}>
            <div className="pt-md-5 mt-4 me-md-n5">
              <h2 className="h4 mb-2 pb-1 ms-md-3"><a className="nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start" ><i className="fi-layers text-primary me-2 pe-1"></i><span>Automated </span></a></h2>
              <div className="position-relative zindex-0"><img className="position-relative zindex-5 rounded-md" src={image2} alt="AUTOMATED" />
                <div className="d-none d-md-block position-absolute zindex-1" style={{top: "15px", left:"20px", width:"calc(100% - 40px)", height:"calc(100% - 50px)", boxShadow:"33px 26px 85px rgba(0, 0, 0, .14);"}}></div>
              </div>
            </div>
          </div>

         
        
          <div className="d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3" style={{maxWidth: "636px"}}>
            <h2 className="h4 ms-md-3"><a className="nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start" href="job-board-home-v1.html"><i className="fi-security text-primary me-2 pe-1"></i><span>Testing</span></a></h2><img className='rounded-md testing'  src={image4} alt="testing"/>
          </div>
        </div>
        <div className="col-md-12 d-md-flex pt-2 pt-md-0 mt-md-n5">
   
   <div className="d-block hover-img-scale position-relative my-4 mt-md-5 mb-md-0 mx-auto ms-md-0 me-md-3 missing" style={{maxWidth: '550px',opacity:"0",display:"none"}}>
                <h2 className="h4 ms-md-3"><a className="nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start" href="city-guide-home-v1.html"><i className="fi-mn text-primary me-2 pe-1"></i><span></span></a></h2><img src={image3} className='missing'  alt="City Guide Demo"/>
              </div>

         
          <div className="d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3" style={{maxWidth:'636px'}}>
            <div className="d-flex flex-column">
              <h2 className="h4 order-md-2 mb-4 mb-md-0 mt-md-4"><a className="nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start" ><i className="fi-code text-primary me-2 pe-1"></i><span>Analysis</span></a></h2><img className="d-block order-md-1 mt-md-n2 rounded-md  analysis"  src={image3} alt="analysis"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export  {Hero}