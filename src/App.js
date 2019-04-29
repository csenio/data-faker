import React, { useState } from "react";
import randomWords from "random-words";
import "./App.css";

function App() {
  const [fields, setFields] = useState([]);
  const [value, setValue] = useState("");

  const onChange = e => setValue(e.target.value);
  const addField = () => {
    const set = new Set(fields);
    set.add({ name: value });
    setFields([...set]);
  };
  const remove = name => {
    setFields(fields.filter(i => i.name !== name));
  };

  const bOpen = "{";
  const bClose = "}";

  return (
    <div className="App">
      <div>
        {fields.length &&
          fields.map(field => (
            <div>
              <span>{field.name}</span>
              <button onClick={() => remove(field.name)}>-</button>
            </div>
          ))}

        <input onChange={onChange} placeholder="new field" />
        <button onClick={addField}>add</button>
      </div>
      <div>
        <code>
          {bOpen}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map(n => {
            return (
              <div key={n}>
                {bOpen}
                {fields.map(field => (
                  <div>
                    {field.name}: "{field.type==='number'?  randomWords()}"
                  </div>
                ))}
                {bClose}
              </div>
            );
          })}
          {bClose}
        </code>
      </div>
    </div>
  );
}

export default App;
