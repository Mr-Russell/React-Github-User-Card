import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard.js'





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
        <UserCard data={this.state.userData} />
        
        {/* {
          this.state.followers.map(item =>{
            <UserCard data={item}/>
          })
        } */}

      </div>
    );
  }
}

export default App;
