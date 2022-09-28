import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import TOC from './components/TOC';
import About from './components/About';
import './index.css';
import Contact from './components/Contact';
export default class App extends Component {
  render() {
    return (
      <>
      <Nav/>
        <TOC />
        <Main />
        <About />
        <Contact/>
      </>
    )
  }
}

