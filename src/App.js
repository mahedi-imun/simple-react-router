
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/friend' element={<Friends/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
