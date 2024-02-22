// import { Route, Routes,Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App " >
      <Routes>
        <Route path='/My_Portfolio'element={<Home/>} ></Route>
      </Routes>
     
    </div>
  );
}

export default App;
