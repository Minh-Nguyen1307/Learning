import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/1. Header/Header'
import Home from './Pages/1. Home/Home'
import Footer from './Components/2. Footer/Footer';

import SignUp from './Pages/2. SignUp/SignUp';
import LogIn from './Pages/3. LogIn/LogIn';
import Courses from './Pages/4. Courses/Courses';
import Information from './Pages/5. Information/Information';

function App() {
 

  return (
   
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Information/:title" element={<Information />} />
          </Routes>
        <Footer />
      </Router>
    
  )
}

export default App
