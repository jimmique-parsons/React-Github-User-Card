import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    userData: {}
  };

  componentDidMount() {
    fetch('https://api.github.com/users/jimmique-parsons')
      .then( res => res.json())
      .then( data => this.setState({ userData: data }))
      .catch( err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Github User Cards</h1>
          <div className="container">
            <div className="card">
              <h4>{this.state.userData.login}</h4>
              <img 
                className="card__avatar"
                alt={this.state.userData.login}
                src={this.state.userData.avatar_url}
              />
            </div>
          </div>
        </header>
      </div>
    );
 };
}

export default App;
