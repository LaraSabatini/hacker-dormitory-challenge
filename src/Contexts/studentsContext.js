import React, { createContext, useState } from "react"

export const StudentContext = createContext({
  listOfStudents: null,
  setListOfStudents: null,
  error: null,
  setError: null,
  errorMsg: null,
  setErrorMsg: null,
})

function StudentContextProvider({ children }) {
  const [listOfStudents, setListOfStudents] = useState([])
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  return (
    <StudentContext.Provider
      value={{
        listOfStudents,
        setListOfStudents,
        error,
        setError,
        errorMsg,
        setErrorMsg
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider
