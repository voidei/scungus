import React from "react";

import ClickScungus from "../hooks/ClickScungus";
import LoadScungus from "../hooks/LoadScungus";
import ResetScungus from "../hooks/ResetScungus";
import SaveScungus from "../hooks/SaveScungus";
import "./app.css";

const App = () => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (["CapsLock", "Alt"].indexOf(event.key) !== -1) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(`${event.key}\nhello ultra!!!`);
  };

  return (
    <div
      className="root"
      style={{ display: "flex", width: "100%" }}
      onKeyDown={handleKeyDown}
    >
      <div className="side left">
        <div className="title-text heading">
          <h1>this is scungus:)</h1>
        </div>
        <div className="text center top">
          you can click on scungus:)
          <br />
          doing so will increase your scungus:)
          <br />
          try it~!
        </div>
        <div className="button scungus padding">
          <ClickScungus />
        </div>
      </div>
      <div className="side right">
        <br />
        <SaveScungus />
        <br />
        <LoadScungus />
        <br />
        <ResetScungus />
        <br />
      </div>
    </div>
  );
};

export default App;
