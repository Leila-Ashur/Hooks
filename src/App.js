// import logo from './logo.svg';
import Products from './Products';
import Navbar from './Navbar';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Login/index';
import ProductDetails from './ProductDetails';
import Form from './Form';

function App() {
  return (
   <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route index element ={<Products/>}/>
      <Route path='/login'element={<Login/>}/>
     < Route path='/Product' element={<Products/>}/>
      <Route path ='/productsdetails/:productId'element={<ProductDetails/>}/>
      <Route path='/AddProducts'element={<Form/>}/>
     
      
    </Routes>
    </BrowserRouter>
   </div>
);
}
   
 

export default App;
