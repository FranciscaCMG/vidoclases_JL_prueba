import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Plantilla2C() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Título 1",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 2,
      title: "Título 2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 3,
      title: "Título 3",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 3,
    },
    {
      id: 4,
      title: "Título 4",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 2,
    },
  ]);

  const getList = (list) => {
    return tasks.filter((item) => item.list === list);
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id); // Almacenar el ID del item en el drag
  };

  const draggingOver = (evt) => {
    evt.preventDefault(); // Necesario para permitir el drop
  };

  // Esta función maneja el drop en la columna "Estilos Predeterminados" y duplica el elemento
  const onDropDuplicate = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = tasks.find((task) => task.id === parseInt(itemID));

    if (!item) return;

    // Duplicamos la tarea y cambiamos su list a la de destino
    const duplicatedTask = { ...item, id: new Date().getTime(), list };

    // Actualizamos el estado para agregar la tarea duplicada
    setTasks((prevState) => [...prevState, duplicatedTask]);
  };

  // Esta función maneja el drop en las columnas de "Presentación Actual" y mueve la tarea sin duplicarla
  const onDropMove = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = tasks.find((task) => task.id === parseInt(itemID));

    if (!item || item.list === list) return; // No hacer nada si el item ya está en la lista destino

    // Mover la tarea a la nueva lista
    item.list = list;

    // Actualizamos el estado para reflejar el cambio
    const newState = tasks.map((task) => (task.id === item.id ? item : task));
    setTasks(newState);
  };

  // Cambiar título de una tarea
  const handleTitleChange = (id, newTitle) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  // Eliminar una tarea
  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id)); // Eliminamos la tarea
  };

  return (
    <div>
      <div className="drag-and-drop">
        {/* Columna 2 y 3 - Presentación Actual */}
        <div className="column2 column--2">
          <h3>Presentación 2 Columnas</h3>

          <div className="columns-container">
            {/* Columna 2 */}
            <div className="column">
              <h4>Columna 1</h4>
              <div
                className="dd-zone"
                droppable="true"
                onDragOver={(evt) => draggingOver(evt)}
                onDrop={(evt) => onDropMove(evt, 2)} // Mover tarea sin duplicar
              >
                {getList(2).map((item) => (
                  <div
                    className="dd-element"
                    key={item.id}
                    draggable
                    onDragStart={(evt) => startDrag(evt, item)}
                  >
                    <strong className="title">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                          handleTitleChange(item.id, e.target.value)
                        }
                      />
                    </strong>
                    <p className="body">{item.body}</p>
                    <button
                      className="button-plantilla"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna 3 */}
            <div className="column">
              <h4>Columna 2</h4>
              <div
                className="dd-zone"
                droppable="true"
                onDragOver={(evt) => draggingOver(evt)}
                onDrop={(evt) => onDropMove(evt, 3)} // Mover tarea sin duplicar
              >
                {getList(3).map((item) => (
                  <div
                    className="dd-element"
                    key={item.id}
                    draggable
                    onDragStart={(evt) => startDrag(evt, item)}
                  >
                    <strong className="title">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                          handleTitleChange(item.id, e.target.value)
                        }
                      />
                    </strong>
                    <p className="body">{item.body}</p>
                    <button
                      className="button-plantilla"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
