import React from 'react';

class App extends React.Component{
  componentDidMount() {
    fetch('http://localhost:3000/accounts')
    .then(data => data.json())
    .then(data => console.log(data))
  }
  render()  {
  return (
    <div className="App">
      App
    </div>
  );
  }
}

export default App;
