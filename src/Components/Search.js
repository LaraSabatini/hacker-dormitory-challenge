import React, {useState, useContext, useEffect} from 'react';
import {StudentContext} from '../Contexts/studentsContext'
import {STUDENTS} from '../studentsList'

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search() {
	const {setListOfStudents, listOfStudents, setError, setErrorMsg} = useContext(StudentContext)
	const [currentStudent, setCurrentStudent] = useState("")
	const [currentDateInserted, setCurrentDateInserted] = useState("")

	const checkStudent = () => {
		if(currentStudent.length > 0) {
			const filterStudents = STUDENTS.filter(student => 
				student.name.toLocaleLowerCase() === currentStudent.toLocaleLowerCase()
			)
			if(filterStudents.length > 0) {
				const checking = checkValidity(currentDateInserted, filterStudents[0].validityDate)
				setError(!checking)
				setErrorMsg(`Sorry, ${filterStudents[0].name}'s validity has Expired!`)
				if (checking) {
					const checkIfItsAlreadyInTheList = listOfStudents.findIndex(student => student.toLocaleLowerCase() === currentStudent.toLocaleLowerCase())
				 	checkIfItsAlreadyInTheList === -1 && setListOfStudents([...listOfStudents, currentStudent])
				}
			} else {
				setError(true)
				setErrorMsg(`Sorry, ${currentStudent} is not a verified student!`)
			}
		}
		setCurrentStudent('')
		setCurrentDateInserted('')
	}

	const cleanStates = () => {
		setCurrentStudent('')
		setCurrentDateInserted('')
		setListOfStudents([])
		setError(false)
		setErrorMsg('')
	}

	useEffect(() => {
		cleanStates()
	}, [])

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input onChange={e => setCurrentStudent(e.target.value)}
					value={currentStudent}
					id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input onChange={e => setCurrentDateInserted(e.target.value)} value={currentDateInserted} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
				</div>
			</label>
			<button onClick={checkStudent} type="button" data-testid="addBtn" className="small mb-0">Add</button>
		</div>
	);
}

export default Search;
