import './App.css';
import React, { useState } from "react";

import EditorComponent from "./Component/editor.component";

function App() {
    const [value, setValue] = useState("");
    const getValue = (value) => {
        setValue(value);
    };
  return (
    <div className="App">
        <div className="row">
            <div className="col-md-6" style={{ marginTop: "50px" }}>
                <div >
                    <h3> HTML Editor</h3>
                </div>
                <div>{value}</div>
                <br/>
                <EditorComponent initialValue="" getValue={getValue} />
                <br />
            </div>
        </div>
    </div>
  );
}

export default App;
