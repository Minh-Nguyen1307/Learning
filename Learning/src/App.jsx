import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/1. Header/Header'
import Home from './Pages/1. Home/Home'
import Footer from './Components/2. Footer/Footer';

import SignUp from './Pages/2. SignUp/SignUp';
import LogIn from './Pages/3. LogIn/LogIn';

function App() {
 

  return (
   
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        <Footer />
      </Router>
    
  )
}

export default App
