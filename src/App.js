// import { Route, Routes,Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ViewProject from './Components/View Project/ViewProject';
import AllProjects from './Components/All Project/AllProjects';

// import Allproject from './Components/All Project/Allproject';


function App() {
  return (
    <div className="App " >
      <Routes>
        <Route path='/My_Portfolio/'element={<Home/>} ></Route>
        <Route path='/project/:id' element={<ViewProject/>}></Route>
        <Route path='/allproject' element={<AllProjects/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
