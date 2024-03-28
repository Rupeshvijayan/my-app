import logo from './logo.svg';
import './App.css';
import Table from './Table';
import List from './List';
import About from './About';
import Welcome from './Welcome';
import Clsstate from './Clsstate';
import Count from './Count';
import Changehook from './Changehook';
import Login from './Login';
import Employee from './Employee';

function App() {
  const userDetail = [
    
    {
      name:"mimi1",
      age:25
    },

    {
      name:"mimi2",
      age:25
    },

    {
      name:"mimi3",
      age:25
    },

  ]

  const listDetail = [
    
    {
      name:"john1",
      age:23
    },

    {
      name:"john2",
      age:23
    },

    {
      name:"john3",
      age:23
    },

  ]

  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <Table user={userDetail}/>
      <List li={listDetail}/>
      <About userData={userDetail}/>
      <Welcome name="john" pro="Designer"/>
      <Clsstate/>
      <Count/>
      <Changehook/>
      <Login/>
      <Employee/>
    </div>
  );
}

export default App;
