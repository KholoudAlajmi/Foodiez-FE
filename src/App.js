//import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav'
import Signup from './Components/Signup';
import Recipes from './Components/Recipes';
import Creators from './Components/Creators';
import Categories from './Components/Categories';



function App() {
  return (
    <div className="App"> 
    <Nav/>
    <Signin/>
    <Signup/>
    <Recipes/>
    <Creators/>
    <Categories/>
    
    </div>
  );
}

export default App;
