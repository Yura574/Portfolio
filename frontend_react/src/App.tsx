import React from 'react';
import './App.scss';
import {Header} from "./containers/Header/Header";
import {About} from "./containers/About/About";
import {Work} from "./containers/Work/Work";
import {Skills} from "./containers/Skills/Skills";
import {Testimonial} from "./containers/Testimonial/Testimonial";
import {Footer} from "./containers/Footer/Footer";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={'app'}>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;
