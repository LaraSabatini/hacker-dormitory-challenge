import React, {useContext} from 'react';
import {StudentContext} from '../Contexts/studentsContext'

function Error() {
	const {error, errorMsg} = useContext(StudentContext)

	return (
		<>
		{error && <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{errorMsg}</div>}
		</>
	)
}

export default Error;
