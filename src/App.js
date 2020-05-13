import React from 'react';
import './App.css';
import TodoItem from './Components/TodoItem.component';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: [
        {
          id: 1,
          text: 'Učiti React',
          complete: true
        },
        {
          id: 2,
          text: 'Prošetati Hunda',
          complete: false
        },
        {
          id: 3,
          text: 'Objesiti veš',
          complete: true
        },
        {
          id: 4,
          text: 'Odvježbati',
          complete: false
        },
        {
          id: 5,
          text: 'Gledati IASIP',
          complete: false
        }
      ]
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(id) {
    console.log('neće kod ispod')
    this.setState((prevState) => {
      const updatedTodos = prevState.tasks.map(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      })
      return {
        tasks: updatedTodos
      }
    })
  }

  render() {
    const todoComponents = this.state.tasks.map(item => {
      return(
          <TodoItem 
          key={item.id}
          todoData={item}
          handleInput={this.handleInput}
          />
    
      )
    })
    return(
        <div className="App">
          {todoComponents}
        </div>
    )
  }
}

export default App;
