import React from 'react';
import './App.css';
import StudentContextProvider from './Contexts/studentsContext'
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <StudentContextProvider>
        <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
          <Search />
          <Error/>
          <ResidentsList/>
        </div>
      </StudentContextProvider>
    </div>
  );
}

export default App;
