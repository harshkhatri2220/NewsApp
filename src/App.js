import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state={progress:0}

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (

      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <NavBar />
          <Routes>
            <Route  path="/"element={<News setProgress={this.setProgress}   key="General" pageSize={10} country="in" category="general"/>}></Route>
            <Route  path="/business"element={<News setProgress={this.setProgress}   key="business"pageSize={10} country="in"category="business" />}></Route>
            <Route  path="/entertainment"element={<News setProgress={this.setProgress}   key="entertainment"pageSize={10} country="in" category="entertainment"/>}></Route>
            <Route  path="/general"element={<News setProgress={this.setProgress}  key="general" pageSize={10} country="in" category="general"/>}></Route>
            <Route  path="/health"element={<News setProgress={this.setProgress}  key="health" pageSize={10} country="in" category="health"/>}></Route>
            <Route  path="/science"element={<News setProgress={this.setProgress}  key="science" pageSize={10} country="in" category="science"/>}></Route>
            <Route  path="/sports"element={<News setProgress={this.setProgress}  key="sports" pageSize={10} country="in" category="sports"/>}></Route>
            <Route  path="/technology"element={<News setProgress={this.setProgress}  key="technology"pageSize={10} country="in" category="technology"/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


