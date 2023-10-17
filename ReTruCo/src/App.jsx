import NavBar from "./components/layouts/NavBar";
import ItemListContainer from "./components/common/ItemListContainer";
import ItemCount from "./components/common/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/common/ItemDetailContainer";
import { BsTypeH1 } from "react-icons/bs";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
        <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
        <Route path='*'element={<h1>404 NOT FOUND</h1> }/>
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
