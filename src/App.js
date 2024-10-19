// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Menu/Home'; 
import MainLayout from './Sidebar/sidebar';
import MyCourses from './Menu/Courses'   
import Settings from './Menu/Settings' 
import Profile from './Menu/Profile'  
import Newcos from './Menu/Newcourses';
import Login from './Login/login'
import { useOne, useOneInitial } from 'useone-react';

 
function App() {
  useOneInitial(["categories",[]])

const [islog,setislog]=useState({islog:localStorage.getItem('token')?true:false})
  return (<>
    <Router>{islog.islog?
    <Routes>

      
      <Route path='/'  element={<MainLayout setislog={setislog} />} >
      
      
          <Route  path="/Home" element={<Home />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newcourses" element={<Newcos />} />
        </Route>

        </Routes>:  <Routes>

      
<Route path='/'  element={<Login setislog={setislog}/>} >
  </Route>

  </Routes>}
    </Router>
    </>
  );
}

export default App;