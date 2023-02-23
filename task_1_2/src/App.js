
import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Task from './Task'
import Book from './Book';
import { Link } from 'react-router-dom'
import Task2 from'./Task2'
function App() {
  return (
    <>
    <h1 style={{color:'blue'}}>hello...</h1>
    <Task2 name="krish1" />

<Routes>
    <Route path='/home' element={<h1>home page</h1>}/>
    <Route path='/view' element={<h1>view page</h1>}/>
    <Route path='/index' element={<h1>index page</h1>}/>
    <Route path='/Book' element={<Book/>}/>
    <Route path='/Task' element={<Task/>}/>
    <Route path='*' element={<h1>404 page</h1>}/>
  </Routes>

 
    <nav>
      <ul>
        <li><Link to='/Book'>book</Link></li>
        <li><Link to='/Task'>Task</Link></li>

      </ul>
    </nav>
    
    </>
  );
}

export default App;
