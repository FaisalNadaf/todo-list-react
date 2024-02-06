import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CheckboxButton from "./markascomplet";
import './todolist.css'

export default function Todolist() {
  let [todos, settodos] = useState([{ task: "sample", id: uuidv4(),isdone:false }]);
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
  let done = (id) => {
    settodos((pretodo) => 
      pretodo.map((todo) => {
        if(todo.id==id){
          return {...todo,isdone:true,};
        }else{
          return todo;
        }
      }
       
      )
    );
  };

  

  return (
    <div className="cointainer">
      <input type="text" onChange={addupdate} value={newtodo} />
      <button onClick={addNew} className="addbtn">add</button>
      <br />
      <br />
      <br />
      <table>
        {todos.map(
          (todo) =>
            todo.task !== "" && (
              <tr key={todo.id}>
                <td style={todo.isdone ? {textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.task}</td>
                <td>
                  <button onClick={()=>deletetodo(todo.id) } className="removebtn">remove</button>
                </td>
                <td>
                 <button  onClick={()=>done(todo.id) 
                }>done</button>
                </td>
              </tr>
            )
        )}

      </table>
    </div>
  );
}
