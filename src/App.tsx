import './App.css';
import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";

function App() {
  return (
    <div className="App">
        <Header/>
        <Article/>
        <Footer/>
    </div>
  );
}

export default App;
