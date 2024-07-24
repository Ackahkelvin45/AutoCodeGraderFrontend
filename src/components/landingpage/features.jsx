import arrow from "../../assets/img/intro/turn-right-arrow.svg"
import automated from "../../assets/img/features/automated.png"
import error from "../../assets/img/features/error.png"
import quality from "../../assets/img/features/quality.png"

import plariagiarism from "../../assets/img/features/plariagiarism.png"


const  Features=()=>{
  return (
    <section className="container pt-md-4 pt-xl-5 pb-lg-3 pb-xl-5">
    <div className="row mb-5">
      <div className="col-lg-3">
        <h2 className="py-2 pb-md-3 pb-lg-4">Finder feature highlights</h2><img className="d-none d-lg-block" src={arrow} width="80" alt="Arrow"/>
      </div>
      <div className="col-lg-9">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-1 gy-md-3 gx-3 gx-md-4">
          <div className="col">
            <div className="card card-body card-hover h-100 border-0   p-4 d-flex justify-content-center align-items-center "><img className="d-block mb-3" src={automated} width="56" alt="Bootstrap logo"/>
              <h3 className="h6">Automated Assignment </h3>
              <p className="fs-sm mb-0">Instructors can create programming assignments effortlessly within the system. They can specify task details, allowed programming languages, input/output requirements, and evaluation criteria</p>
            </div>
          </div>


          <div className="col">
            <div className="card card-body card-hover h-100 border-0   p-4 d-flex justify-content-center align-items-center "><img className="d-block mb-3" src={error} width="56" alt="Bootstrap logo"/>
              <h3 className="h6"> Error Detection</h3>
              <p className="fs-sm mb-0">The system includes an automated testing module that runs each student's code against predefined test cases. This ensures accurate evaluation of the correctness and reliability of the code.</p>
            </div>
          </div>




          <div className="col">
            <div className="card card-body card-hover h-100 border-0   p-4 d-flex justify-content-center align-items-center "><img className="d-block mb-3" src={quality} width="56" alt="Bootstrap logo"/>
              <h3 className="h6">Code Quality Analysis</h3>
              <p className="fs-sm mb-0">AutoCodeGrader performs static code analysis to assess adherence to coding standards, code readability, and best practices. It offers constructive feedback on areas for improvement.
</p>
            </div>
          </div>
        

        
          <div className="col">
            <div className="card card-body card-hover h-100 border-0   p-4 d-flex justify-content-center align-items-center "><img className="d-block mb-3" src={plariagiarism} width="56" alt="Bootstrap logo"/>
              <h3 className="h6">Plagiarism Detection</h3>
              <p className="fs-sm mb-0"> The system incorporates robust plagiarism detection mechanisms to identify similarities between code submissions. Suspicious cases are flagged for manual review by instructors.

</p>
            </div>
          </div>

        
   
       
        
        </div>
      </div>
    </div>
  </section>
  )
}

export  {Features}