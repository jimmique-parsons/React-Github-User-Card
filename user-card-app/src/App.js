import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    userData: {},
    userFollowers: []
  };

  componentDidMount() {
    fetch('https://api.github.com/users/jimmique-parsons')
      .then( res => res.json())
      .then( data => this.setState({ userData: data }))
      .catch( err => console.log(err));

    fetch('https://api.github.com/users/jimmique-parsons/followers')
      .then( res => res.json())
      .then( data => this.setState({ userFollowers: data }))
      .catch( err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        
          <h1>Github User Cards</h1>
          <div className="container">
             <a href={this.state.userData.html_url} className="card user-card">
               <div>
                 <img 
                   className="card__avatar"
                   alt={this.state.userData.login}
                   src={this.state.userData.avatar_url}
                 />
                 <h4>{this.state.userData.login}</h4>
                 <p>Bio: {this.state.userData.bio}</p>
                 <p>Followers: {this.state.userData.followers}</p>
               </div>
             </a>
           </div>
           <h2>Followers</h2>
          <div className="container">
          {this.state.userFollowers.map( follower => {
               return (
                 <a href={follower.html_url} className="card">
                   <div>
                     <img 
                       className="card__avatar"
                       alt={follower.login}
                       src={follower.avatar_url}
                     />
                     <h4>{follower.login}</h4>
                   </div>
                 </a>
               );
             })}
          </div>
      </div>
    );
 };
}

export default App;
