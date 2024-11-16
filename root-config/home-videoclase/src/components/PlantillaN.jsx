import React from "react";

export default function PlantillaN({ tasks, moveTask, editTask }) {
  // Verifica si tasks está definido y es un array antes de usar el método filter
  const getList = (list) => {
    if (!Array.isArray(tasks)) {
      console.error("tasks no es un array:", tasks);
      return [];
    }
    return tasks.filter((item) => item.list === list);
  };

  return (
    <div className="drag-and-drop">
      <div className="column2 column--2">
        <h3>Presentación Actual</h3>
        <div className="columns-container">
          <div className="column">
            <h4>Columna 1</h4>
            <div
              className="dd-zone"
              droppable="true"
              onDragOver={(evt) => evt.preventDefault()}
              onDrop={(evt) => {
                const itemID = evt.dataTransfer.getData("itemID");
                const item = tasks.find((task) => task.id === parseInt(itemID));
                if (item) moveTask(item.id, 2); // Mover tarea
              }}
            >
              {getList(2).map((item) => (
                <div
                  key={item.id}
                  className="dd-element"
                  draggable
                  onDragStart={(evt) =>
                    evt.dataTransfer.setData("itemID", item.id)
                  }
                >
                  {/* Título editable */}
                  <strong className="title">
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        editTask(item.id, "title", e.target.value)
                      }
                    />
                  </strong>

                  {/* Cuerpo editable */}
                  <p className="body">
                    <textarea
                      value={item.body}
                      onChange={(e) =>
                        editTask(item.id, "body", e.target.value)
                      }
                    />
                  </p>

                  {/* Botón de eliminar */}
                  <button
                    className="button-plantilla"
                    onClick={() => moveTask(item.id, 1)} // Mover a EstilosPredeterminados
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
  );
}
