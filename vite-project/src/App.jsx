import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  

  return (
    <>
     <Header/>
    <Outlet/>
  <Footer/>
    </>
  )
}

export default App
