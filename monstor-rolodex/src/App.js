import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[]
    }
  }
  // life cycle methods \
  // this below life cycle method will work when the your code get mounted to website for first time 

  // native fetch in javascript return content in the form of promise
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))

  }

  render(){
    return(
      <div className='App'>
        {
          this.state.monsters.map(monster=><h1 key={monster.key}>{monster.name}</h1>)
        }
      </div>
    )
  }
}
export default App;
