import "./Report.css";

import { useState } from "react";

import { SaltwaterForm } from "./Forms/SaltwaterForm";
import { StillwaterForm } from "./Forms/StillwaterForm";
import { StreamForm } from "./Forms/StreamForm";

function Report(props) {
  const { auth } = props;
  const [state, setState] = useState("");

  switch (state) {
    case "Saltwater":
      return <SaltwaterForm auth={auth} />;
    case "Stillwater":
      return <StillwaterForm auth={auth} />;
    case "River/Stream":
      return <StreamForm auth={auth} />;
    default:
      return render();
  }

  function render() {
    return (
      <div className="Report">
        <div>File a fishing report:</div>
        <input
          type="button"
          value="Saltwater"
          onClick={(e) => setState(e.target.value)}
        />
        <input
          type="button"
          value="Stillwater"
          onClick={(e) => setState(e.target.value)}
        />
        <input
          type="button"
          value="River/Stream"
          onClick={(e) => setState(e.target.value)}
        />
      </div>
    );
  }
}

export { Report };
