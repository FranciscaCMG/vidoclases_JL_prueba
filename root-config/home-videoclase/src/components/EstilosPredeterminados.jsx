import React from "react";

export default function EstilosPredeterminados({ tasks, duplicateTask }) {
  const getList = (list) => {
    return tasks.filter((task) => task.list === list);
  };

  return (
    <div className="drag-and-drop">
      <div className="column column--1">
        <h3>Estilos Predeterminados</h3>
        <div
          className="dd-zone"
          droppable="true"
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={(evt) => {
            const itemID = evt.dataTransfer.getData("itemID");
            const item = tasks.find((task) => task.id === parseInt(itemID));
            if (item) duplicateTask(item, 1); // Duplicar tarea
          }}
        >
          {getList(1).map((item) => (
            <div
              key={item.id}
              className="dd-element"
              draggable
              onDragStart={(evt) => evt.dataTransfer.setData("itemID", item.id)}
            >
              <strong className="title">{item.title}</strong>
              <p className="body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
