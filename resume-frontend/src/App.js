import React from 'react';
import Navbar from './Resume-content/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumeBody } from './Resume-content/ResumeBody/ResumeBody';
import { SelectorTemplate } from './SelectorTemplate'; 
import Templatecontainer from './Resume-content/Templatecontainer/Templatecontainer';
import Resume from './Resume-content/Resume/Resume';
import SignUp from './Resume-content/SignUp/SignUp';
import Login from './Resume-content/Login/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SelectorTemplate>
        <Routes>
          <Route path="/" element={<ResumeBody />} />
          <Route path="/Templatecontainer" element={<Templatecontainer/>} />
          <Route path="/Resume" element={<Resume/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </SelectorTemplate>
    </BrowserRouter>
  );
};

export default App;
