
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter
      <Navbar />
      <Home />
      <Footer />

    </>
  )
}

export default App
