import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
import Home from './pages/Home'
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
