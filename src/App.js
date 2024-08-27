// import { Route, Routes,Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ViewProject from './Components/View Project/ViewProject';
import Allproject from './Components/All Project/Allproject';

// import Allproject from './Components/All Project/Allproject';


function App() {
  return (
    <div className="App " >
      <Routes>
        <Route path='/My_Portfolio/'element={<Home/>} ></Route>
        <Route path='/project/:id' element={<ViewProject/>}></Route>
        <Route path='/allproject' element={<Allproject/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
