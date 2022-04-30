import React, {useContext} from 'react';
import {StudentContext} from '../Contexts/studentsContext'

function ResidentsList() {
	const {listOfStudents} = useContext(StudentContext)
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{listOfStudents.length > 0 && listOfStudents.map(student => 
					<li key={student} className="slide-up-fade-in">
						{student}
					</li>
					)}
			</ul>
		</div>
	);
}

export default ResidentsList;
