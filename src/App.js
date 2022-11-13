import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { GlobalStyle } from './Styles/Global';
import Home from './Screens/Home';
import Playground from './Screens/Playground';
import Error404 from './Screens/Eror 404';
function App() {
  return (
   <BrowserRouter>
   <GlobalStyle/>
   <Routes>
      < Route path='/' element = {<Home/> }/>
      <Route path='/Playground' element = { <Playground/> }/>
      <Route path='*' element = { <Error404/> } />



   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
