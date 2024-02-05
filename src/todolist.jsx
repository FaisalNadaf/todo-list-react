import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function Todolist() {
  let [todos, settodos] = useState([{ task: "sample", id: uuidv4() }]);
  let [newtodo, setnewtodo] = useState("");

  let addNew = () => {
    settodos([...todos, { task: newtodo, id: uuidv4() }]);
    setnewtodo(""); // Clear the input field after adding a new task
  };

  let addupdate = (event) => {
    setnewtodo(event.target.value);
  };

  let deletetodo = (id) => {
    settodos((pretodo) => 
      todos.filter((pretodo) => 
         pretodo.id != id
      )
    );
  };

  return (
    <>
      <input type="text" onChange={addupdate} value={newtodo} />
      <button onClick={addNew}>add</button>
      <br />
      <br />
      <br />
      <table>
        {todos.map(
          (todo, id) =>
            todo !== "" && (
              <tr key={todo.id}>
                <td>{todo.task}</td>
                <td>
                  <button onClick={()=>deletetodo(todo.id)}>remove</button>
                </td>
              </tr>
            )
        )}
      </table>
    </>
  );
}
