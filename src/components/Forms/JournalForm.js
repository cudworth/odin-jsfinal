import { useState, useEffect } from "react";

const defaultState = {};

function JournalForm(props) {
  const { fb, onEscape, formData } = props;

  useEffect(() => {
    //Build default state based on form fields included
    formData.groups.forEach((group) => {
      group.fields.forEach((field) => {
        defaultState[field.id] = field.val;
      });
    });
  }, []);

  const [state, setState] = useState(defaultState);

  const { id, label, className, groups } = formData;

  return (
    <form key={id} className={className}>
      <h1>{label}</h1>
      {renderGroups(groups)}
      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          fb.addData(state);
          onEscape();
        }}
      />{" "}
      <input type="button" value="Cancel" onClick={onEscape} />
    </form>
  );

  function renderGroups(groups) {
    return groups.map((group) => {
      const { id, label, className, fields } = group;
      return (
        <div key={id} className={className}>
          <h2>{label}</h2>
          {renderFields(fields)}
        </div>
      );
    });
  }

  function renderFields(fields) {
    return fields.map((field) => {
      const { id, label, className, type } = field;
      return (
        <label key={id} className={className}>
          {label}
          <input
            type={type}
            value={state[id]}
            onChange={(e) => {
              setState((prev) => {
                const next = { ...prev };
                next[id] = e.target.value;
                return next;
              });
            }}
          />
        </label>
      );
    });
  }
}

export { JournalForm };
