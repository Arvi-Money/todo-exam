import './App.css'
import check from './assets/Check.svg'
import trash from './assets/trash.svg'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add, remove } from './redux/todoSlice';

function App() {
  const todos = useSelector(state => state.todo.todo)
  console.log(todos);
  const taskRef = useRef();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState();

  function handleClick(e) {
    e.preventDefault()

    const todoValue = taskRef.current.value

    if (todoValue) {
      let todo = {
        id: Date.now(),
        todo: todoValue,
        status: false
      };

      dispatch(add(todo))
      taskRef.current.value = ""

    }
    setCounter(todos.length + 1)
  }

  function handleDelete(id) {
    dispatch(remove(id));
    setCounter(counter - 1);
  }

  function handleCheck() {
    
  }

  return (
    <>
      <div className="main">
        <form>
          <input type="text" placeholder='Add a new task' ref={taskRef} />
          <button className="btn" onClick={handleClick}>+</button>
        </form>
        <div className="todo">
          {counter > 0 && (
            <h1>Task to do - {counter}</h1>
          )}

          <div className="tasks">
            {
              todos.length > 0 && todos.map((el, index) => {
                return (
                  <div className="task" key={index}>
                    <h2>{el.todo}</h2>
                    <div className="actions">
                      <img src={check} alt="" onClick={() => handleCheck(el.id)}/>
                      <img src={trash} alt="" onClick={() => handleDelete(el.id)} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="done">
          <h3>Done-1</h3>
          <div className="task">
            <p>To study React fundamentals</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
