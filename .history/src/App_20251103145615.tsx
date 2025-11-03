
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      
      <div className="min-h-[80vh]">
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
