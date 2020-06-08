import React from 'react';

import {connect} from 'react-redux';

class App extends React.Component{
  componentDidMount() {
    fetch('http://localhost:3000/accounts')
    .then(data => data.json())
    .then(data => console.log(data))
  }
  render()  {
  return (
    <div className="App">
      dch
    </div>
  );
  }
}

export default connect(null, fetchAccounts())(App);
