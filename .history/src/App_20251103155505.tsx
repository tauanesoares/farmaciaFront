
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categorias" element={<ListaCategorias />} />
      <Route path="/cadastrarcategoria" element={<FormCategoria />} />
      <Route path="/editartema/:id" element={<FormCategoria />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
