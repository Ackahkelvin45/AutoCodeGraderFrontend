import React,{useState,useEffect} from 'react'
import { getFromBackend } from "../../../utils/backendCalls"
import { token } from "../../../utils/config"
import { formatDate } from "../../../utils/datesManipulation"
import { getToken } from "../../../utils/localstorage"

const  OpenAssignments=()=> {
    const [openAss, setOpenAss] = useState([])
    const [grades, setGrades] = useState([])
    const [loading, setLoading] = useState(true)
    let k = []
    useEffect(()=> {
        const loadAssignments = async () => {
            let url = "/coder/student/open/assignments"
            let result = await getFromBackend(url, getToken(token.studentTokenKey))
            setOpenAss(result.data)
            setLoading(false)
        }
        loadAssignments()
    },[])
    

    
  return (
    <div>OpenAssignments</div>
  )
}

export  {OpenAssignments}