import "./Journal.css";

import { useState } from "react";
import { JournalBrowser } from "./JournalBrowser";
import { SaltwaterForm } from "./Forms/SaltwaterForm";
import { StillwaterForm } from "./Forms/StillwaterForm";
import { StreamForm } from "./Forms/StreamForm";

function Journal(props) {
  const { auth } = props;
  const [state, setState] = useState("");

  switch (state) {
    case "saltwater":
      return <SaltwaterForm auth={auth} onEscape={escape} />;
    case "stillwater":
      return <StillwaterForm auth={auth} onEscape={escape} />;
    case "stream":
      return <StreamForm auth={auth} onEscape={escape} />;
    default:
      return render();
  }

  function render() {
    return (
      <div className="Journal">
        <input
          type="button"
          value="Saltwater Report"
          onClick={(e) => setState("saltwater")}
        />
        <input
          type="button"
          value="Stillwater Report"
          onClick={(e) => setState("stillwater")}
        />
        <input
          type="button"
          value="River/Stream Report"
          onClick={(e) => setState("stream")}
        />
        <JournalBrowser />
      </div>
    );
  }
  function escape() {
    setState("");
  }
}

export { Journal };
