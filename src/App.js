import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { PublicRoute } from './routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <PublicRoute />
        </BrowserRouter>
      </Fragment>


    )
  }

}

export default App;
