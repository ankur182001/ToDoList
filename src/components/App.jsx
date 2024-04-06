import React, { useState } from "react";
import ToDoItem from "./toDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  function addItem(data) {
    setItems((prevItems) => {
      return [...prevItems, data];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((items, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={items}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
