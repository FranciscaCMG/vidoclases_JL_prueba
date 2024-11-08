import React from "react";
import { links } from "./root.helper.js";
import { Link, BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <div
        className="h-16 flex items-center justify-between"
        style={{ color: "white" }}
      >
        <div className="flex items-center justify-between nombre-proyecto">
          <Link to="/">VIDEOCLASES</Link>
        </div>
        <div className="flex items-center ml-auto">
          {links.map((link) => {
            return (
              <Link key={link.href} className="p-6" to={link.href}>
                {link.name}
              </Link>
            );
          })}
          <div>
            <Link className="nav-btn" to="/">
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
