import React, { useState } from 'react';
export default function ToDoList() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [todo, setTodo] = useState([]);
  const addDate = new Date().toLocaleString();
  const [warning, setWarning] = useState('');

  const addTodo = () => {
    if (value.trim() === '') {
      setMessage('Add Task');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    } else {
      setTodo([
        ...todo,
        { text: value, dateadded: new Date().toLocaleString(), done: false },
      ]);
      setValue('');
    }
  };
  const enterClick = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };
  const delItem = (delIndex) => {
    const updatedList = todo.filter((del, index) => index !== delIndex);
    setTodo(updatedList);
  };
  const cancelOperation = () => {
    setWarning('');
  };
  const resetTodo = () => {
    setWarning(
      'You are about to delete your todo task list. Press confirm to delete'
    );
  };
  const delList = () => {
    setTodo([]);
    setWarning('');
  };
  const taskDone = (index) => {
    const doneList = [...todo];
    doneList[index].done = !doneList[index].done;
    setTodo(doneList);
  };
  return (
    <div>
      <h4 className="title">Your Todo List to get your day going...</h4>
      <h4 className="sub-title">Today's date is {addDate}</h4>
      <div>
        <input
          autoFocus
          type="text"
          placeholder="Enter task here..."
          className="input-box"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={enterClick}
        />
        <button className="submit-btn" type="submit" onClick={addTodo}>
          Add!
        </button>
      </div>
      {message && <p className="message-box">{message}</p>}
      {warning && (
        <div className="warning-msg">
          <p>{warning} </p>
          <button onClick={delList}>Confirm Delete!</button>
          <button onClick={cancelOperation}>Cancel!</button>
        </div>
      )}
      {todo.length > 0 && (
        <div className="todo-wrapper">
          <ol className="todo-box">
            {todo.map((data, index) => (
              <li key={index}>
                <div className="flex-box">
                  <div
                    style={{
                      textDecoration: data.done ? 'line-through' : 'none',
                      textDecorationColor: data.done ? 'black' : 'white',
                      wordBreak: 'break-word',
                    }}
                  >
                    {data.text}
                  </div>
                  <div className="right-div">
                    <input
                      className="done-btn"
                      type="checkbox"
                      checked={data.done}
                      onChange={() => taskDone(index)}
                    />
                    <span>task added on {data.dateadded}</span>
                    <button
                      className="delete-btn"
                      onClick={() => delItem(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <button className="reset-btn" onClick={resetTodo}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
