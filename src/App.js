import React from 'react';
import AccountsContainer from './containers/AccountsContainer'

import {connect} from 'react-redux';

class App extends React.Component{
  
  render()  {
  return (
    <div className="App">
      <AccountsContainer />
    </div>
  );
  }
}

export default App;
