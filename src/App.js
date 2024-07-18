import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Details from './Components/Details';
import First from './Components/NewSome/First';
import Design from './Components/Design';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Details" element={<Details/>}/>
          <Route path="/First" element={<First/>}/>
          <Route path="/Design" element={<Design/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
