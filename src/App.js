import React, { Component, Fragment } from 'react';
import './App.css';
import { Home } from './containers'
import { PageHeader } from 'antd';

class App extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader
          className="page-header-style"
          title="ไทยรัฐออนไลน์"
        />
        <div className="App">
          <Home />
        </div>
      </Fragment>

    )
  }

}

export default App;
