import React from 'react';
import './App.css';
import axios from 'axios'
import MyCard from './components/MyCard.js'
import FollowersCard from './components/FollowersCard.js'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      userData: [],
      followers: []
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mr-russell")
      .then(res => {
        console.log(res)
        this.setState({userData: res.data})
      })
      .catch(err => console.log(err));
      console.log(this.state.userData)
  
    axios
      .get("https://api.github.com/users/mr-russell/followers")
      .then(res => {
        console.log(res)
        this.setState({followers: res.data})
      })
      .catch(err => console.log(err));
      console.log(this.state.userData)
  }

  
  
  render(){
    return (
      <div className="App">
        <div className='me'>
          <h1>My GitHub Profile</h1>
          <MyCard data={this.state.userData} />
        </div>
        <div className='followers'>
          <h3>My GitHub Followers</h3>
          {
            this.state.followers.map(item => <FollowersCard data={item}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
