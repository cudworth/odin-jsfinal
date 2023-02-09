import "./Journal.css";

import { useState } from "react";
import { JournalBrowser } from "./JournalBrowser";
import { JournalForm } from "./Forms/JournalForm";
import { FormData as SaltwaterFormData } from "./Forms/SaltwaterFormData";
import { FormData as StillwaterFormData } from "./Forms/StillwaterFormData";
import { FormData as StreamFormData } from "./Forms/StreamFormData";

function Journal(props) {
  const { fb } = props;
  const [state, setState] = useState("");

  switch (state) {
    case "saltwater":
      return (
        <JournalForm fb={fb} onEscape={escape} formData={SaltwaterFormData} />
      );
    case "stillwater":
      return (
        <JournalForm fb={fb} onEscape={escape} formData={StillwaterFormData} />
      );
    case "stream":
      return (
        <JournalForm fb={fb} onEscape={escape} formData={StreamFormData} />
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
