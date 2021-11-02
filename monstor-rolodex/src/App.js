import React,{Component} from 'react';
import  {CardList} from './components/card-list/card-list.component';
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
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}
export default App;
