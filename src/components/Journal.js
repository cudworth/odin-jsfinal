import "./Journal.css";

import { useState } from "react";
import { JournalBrowser } from "./JournalBrowser";
import { JournalEntryForm } from "./Forms/JournalEntryForm";
import { SaltwaterForm } from "./Forms/SaltwaterForm";
import { StillwaterForm } from "./Forms/StillwaterForm";
import { StreamForm } from "./Forms/StreamForm";

function Journal(props) {
  const { auth } = props;
  const [state, setState] = useState("");

  switch (state) {
    case "saltwater":
      return (
        <JournalEntryForm
          auth={auth}
          onEscape={escape}
          formData={SaltwaterForm}
        />
      );
    case "stillwater":
      return (
        <JournalEntryForm
          auth={auth}
          onEscape={escape}
          formData={StillwaterForm}
        />
      );
    case "stream":
      return (
        <JournalEntryForm auth={auth} onEscape={escape} formData={StreamForm} />
      );
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
