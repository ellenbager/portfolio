
import './App.css'
import Kontaktmig from './Pages/Kontaktmig'
import Projekter from './Pages/Projekter'
import Navigation from './Components/Navigation'
import { Navigate, Route, Routes } from 'react-router-dom'
import Ommig from './Pages/Ommig'
import ProjectDisplay from './Pages/ProjectDisplay'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Ommig/>}></Route>
        <Route path="/projekter" element={<Projekter/>}></Route>
        <Route path="/portfolio/:id" element={<ProjectDisplay />} />
        <Route path="/kontakt" element={<Kontaktmig/>}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>

    </>
  )
}

export default App;
