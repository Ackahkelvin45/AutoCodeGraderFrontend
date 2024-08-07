import { createContext, useEffect, useState } from "react";
import { getFromBackend, postToBackend } from "../utils/backendCalls";
import { token } from "../utils/config";
import { getToken, saveToken } from "../utils/localstorage";


const LecturerContext = createContext()

const  loadDetails = async (setData, lecturer, setLoading, setAuth, redirect) => {
    let userToken = getToken(token.lecturerTokenKey)
    console.log("loading data")
    if(lecturer.name) {
        setLoading(false)
        console.log("loading")
        return true
        
    }
    console.log("loading")
    if(userToken){
        let response = await getFromBackend("/user/lecturer/me",getToken(token.lecturerTokenKey))
      console.log("response")
        if(response.status === 403) {
            response = await postToBackend("/auth/lecturer/refresh/token",{refresh_token: getToken(token.lecturerRefresh)})
            //save new tokens
           
            saveToken(token.lecturerTokenKey, response.data.token)
            saveToken(token.lecturerRefresh, response.data.refresh_token)
            //use token to get new data
            response = await getFromBackend("/user/lecturer/me",getToken(token.lecturerTokenKey))
        }
        if(response.status === 200) {
            setData({...response.data})
            
            setAuth(true)
            setLoading(false)
            return true
        }
         else {
            alert(response.data.reason)
            setLoading(false)
            return redirect("/auth/login/lecturer")
         }
         
    }else {
        setLoading(false)
        return redirect("/auth/login/lecturer")
    }
    
}


const LecturerContextProvider = ({children}) => {
    const [lecturer, setLecturer] = useState({})
    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(getToken(token.lecturerTokenKey)? true : false)
    
    return (<LecturerContext.Provider value={{loadDetails, authenticated, setAuthenticated,lecturer, setLecturer, loading, setLoading}}>
            {children}
            </LecturerContext.Provider>)
}

export { LecturerContextProvider, LecturerContext };
