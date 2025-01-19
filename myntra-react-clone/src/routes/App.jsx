import Header from "../components/Header"
import FetchItems from "../components/FetchItems"
import Footer from "../components/Footer"
import { Outlet } from "react-router"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"

function App() {
 
  const fetchStatus =  useSelector((store) => store.status);
  
  return (
    <>
    <Header/>
    <FetchItems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
    <Footer/>
    </>
  )
}

export default App
