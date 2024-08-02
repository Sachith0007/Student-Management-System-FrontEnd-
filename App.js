
import React from 'react';
import AddStudent from './Components/addStudent'; //api hadagtta anith pages mekata import krgnnwa mhem
import AllStudents from './Components/AllStudents';
import CounterClass from './Components/counterClass';    /*import karaganna ona counterClass component eka , after that we should call to that component(line no 10)*/
import CounterFunction from './Components/CounterFunction';/*import karaganna ona counterFunction component eka , after that we should call to that component(line no 12)*/
import Header from './Components/Header';
import {Route, BrowserRouter as Router,route,Routes} from "react-router-dom"

function App() {
  return (                                                           
    <>
   
    <Router>
      <div>
        <Header/>
               
        <Routes>                                                  
         
            <Route path='/add' exact Component={AddStudent}/>   
        </Routes> 
         
        <Routes> 
             <Route path='/' exact Component={AllStudents}/>  
        </Routes>
          
      </div>
    </Router>
    </>
  );
}
 
export default App; //app kiyala uda hdagatta function eka default category eken eliyata denna kiyana eka me kiyanne. index.js eke 9 th line eke thiyenne me api export karana app kiyana function eka.
