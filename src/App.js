import './App.css';
import React, { useState } from "react";
import { MathComponent } from "mathjax-react";

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
                <EditorComponent initialValue="" getValue={getValue}  />
                <br />
            </div>
        </div>
        <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
    </div>
  );
}

export default App;
