import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Lifestyle from './Pages/Lifestyle/Lifestyle';
import Food from './Pages/Food/Food';
import Videos from './Pages/Videos/Videos';
import Features from './Pages/Features/Features';

function App() {

  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lifestyle' element={<Lifestyle />} />
          <Route path='/food' element={<Food />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/features' element={<Features />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
