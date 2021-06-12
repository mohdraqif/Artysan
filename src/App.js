import React from 'react';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Service from './components/Service'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Service/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
