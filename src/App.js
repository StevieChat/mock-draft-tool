import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';

class App extends Component {

  render() {
    document.title = 'Stevie\'s Mock Draft Tool';
    return (
        <Layout />
    );
  }
}

export default App;
