
import './App.css'
import ListEmployeeCpmponent from './Components/ListEmployeeCpmponent'
import { HeaderComponent } from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'
function App() {


  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
       { /*// http://localhost:5174*/}
        <Route path='/' element= {<ListEmployeeCpmponent/>}></Route>
       {/* // http://localhost:5174/employees*/}
        
       <Route path='/employees' element= {<ListEmployeeCpmponent/>}></Route>

       {/* // http://localhost:5174/add-employee*/}
       <Route path='/add-employee' element= { <EmployeeComponent/>}></Route>

       {/* // http://localhost:5174/edit-employee/1*/}
       <Route path='/edit-employee/:id' element= { <EmployeeComponent/>}></Route>

      </Routes>
      
      <FooterComponent/>

      </BrowserRouter>
      
    </>
  )
}

export default App
