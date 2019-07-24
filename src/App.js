import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/About'
import Disclaimer from './components/pages/Disclaimer'
import Credits from './components/pages/Credits'
import Photo from './components/Photo'
import LatestPhoto from './components/LatestPhoto'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
              <Route exact path="/" render={props => (
                <LatestPhoto/>
              )}/>
              
              <Route path="/about" component={About}/>
              <Route path="/disclaimer" component={Disclaimer}/>
              <Route path="/credits" component={Credits}/>
              <Route path="/photo" component={Photo}/>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
