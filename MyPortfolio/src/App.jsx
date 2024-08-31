import {BrowserRouter} from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar.jsx'

import Router from './Router.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Router />
    </BrowserRouter>
  
    </>
  )
}

export default App
