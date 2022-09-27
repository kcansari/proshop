import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {Container} from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
    <Header/>
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/product/:id" element={<ProductScreen/>} exact />
        </Routes>
      </Container>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
