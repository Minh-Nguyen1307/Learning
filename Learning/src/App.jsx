import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/1. Header/Header'
import Home from './Pages/1. Home/Home'
import Footer from './Components/2. Footer/Footer';

function App() {
 

  return (
   
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    
  )
}

export default App
