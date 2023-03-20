// import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Router/Home'
import About from './components/Router/About'
import Products from './components/Router/Products'
import ProductDetail from './components/Router/ProductDetail'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route 안에 속성값이 두 개가 들어간다 path / element 
            1. path : 페이지의 주소 URL
            2. element : path 주소로 이동 했을 때 보여줄 페이지
            / : 기본 경로
        */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;

