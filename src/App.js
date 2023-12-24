import React from "react";
import "./style.css";
import Column from "./Column";

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
