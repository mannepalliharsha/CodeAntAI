import Signin from "./components/Signin"
import Signinpage from "./Pages/Signinpage"
import Dashboard from "./Pages/Dashboard"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
         <Routes>
           <Route path='home' element={<Signin></Signin>} ></Route>
           <Route path='signin' element={<Signinpage></Signinpage>}  ></Route>
           <Route path='Dashboard' element={<Dashboard></Dashboard>} ></Route>
         </Routes>
  )
}

export default App
