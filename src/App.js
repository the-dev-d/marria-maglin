
import './App.css';
import Header from './components/Header';
import Picwall from './components/Picwall';
import Profiles from './components/Profiles';
import Posts from './components/Posts';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    Aos.init({duration:1500});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Picwall />
        <Profiles />
        <Posts />
    </div>
    )
  }
}
