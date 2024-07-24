import React,{useState} from 'react'

import { Collapse } from 'reactstrap'

function QuestionAccordion({question,answer,Code}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
 
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button onClick={toggle} className={`accordion-button ${isOpen?"":"collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{question} </button>
    </h2>
    <Collapse  isOpen={isOpen} className={`accordion-collapse collapse ${isOpen?"show":""} `} aria-labelledby="headingOne" data-bs-parent="#accordionExample" id="collapseOne">
      <div className="accordion-body p-2">{answer}</div>
    </Collapse>
  </div>
  )
}

export default QuestionAccordion