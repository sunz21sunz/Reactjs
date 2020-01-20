import React from 'react';
import AddTask from './components/addTask.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ShowTask from './components/showTask.js';




function App() {

  return (
    <div className='App'>
     <h1>Todo App</h1>
     <AddTask></AddTask>
     <ShowTask></ShowTask>
    </div>

  );
}

export default App;