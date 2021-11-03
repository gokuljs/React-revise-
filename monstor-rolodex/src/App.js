import React,{Component} from 'react';
import  {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:[]
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
    const {monsters,searchfield}=this.state;
    const filteredmonsters=monsters.filter((monster) =>(monster.name.toLowerCase().includes(searchfield.toLowerCase())
      ))

    // const filteredMonsters=monsters.filter(monster=>
    //   monster.name.includes(searchField.toLowerCase())
    //   )
    return(
      <div className='App'>
        <input type='search' placeholder='search monsters' onChange={e=>this.setState({searchField:e.target.value},()=>console.log(this.state))}/>
        <CardList monsters={filteredmonsters}/>
      </div>
    )
  }
}
export default App;
