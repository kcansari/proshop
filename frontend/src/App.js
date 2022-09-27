import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {Container} from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";


function App() {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
        <HomeScreen/>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
