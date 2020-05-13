import React from 'react';

function TodoItem(props) {

    return(
      <div className='todoitem'>
        <input type='checkbox'
        checked={props.todoData.complete}
        onChange={() => props.handleInput(props.todoData.id)}

        />
        <p>Danas ću {props.todoData.text.toLowerCase()}</p>
      </div>
    )
}

export default TodoItem;

