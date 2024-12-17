//import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav'
import Signup from './Components/Signup';
import Recipes from './Components/Recipes';
import Creators from './Components/Creators';
import Categories from './Components/Categories';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/creators' element={<Creators/>}></Route>
        
    
    

    </Routes>
    </Router>
  );
}

export default App;
