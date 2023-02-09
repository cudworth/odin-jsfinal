const FormData = {
  id: "saltwater_form",
  label: "Saltwater Report Form",
  className: "saltwater-form",
  groups: [
    {
      id: "loc",
      label: "Location",
      className: "location-group",
      fields: [
        { id: "loc_desc", label: "Name", val: "", type: "text" },
        { id: "loc_lat", label: "Latitude", val: 0, type: "number" },
        { id: "loc_lon", label: "Longitude", val: 0, type: "number" },
      ],
    },
    {
      id: "dt",
      label: "Date & Time",
      className: "date-and-tide-form",
      fields: [
        { id: "dt_date", label: "Date", val: 0, type: "date" },
        { id: "dt_start", label: "Start", val: 0, type: "time" },
        { id: "dt_finish", label: "Finish", val: 0, type: "time" },
      ],
    },
    {
      id: "wx",
      label: "Weather Conditions",
      className: "weather-form",
      fields: [
        {
          id: "wx_temp",
          label: "Temperature",
          val: 72,
          type: "number",
        },
        { id: "wx_clear", label: "Clear Skies", val: false, type: "radio" },
        {
          id: "wx_clouds",
          label: "Partly Cloudy",
          val: false,
          type: "radio",
        },
        { id: "wx_overcast", label: "Overcast", val: false, type: "radio" },
        { id: "wx_rain", label: "Rain", val: false, type: "radio" },
        { id: "wx_snow", label: "Snow", val: false, type: "radio" },
        { id: "wx_fog", label: "Fog", val: false, type: "radio" },
      ],
    },
    {
      id: "tide",
      label: "Tidal Conditions",
      className: "tide-form",
      fields: [
        { id: "tide_high", label: "High", val: "", type: "text" },
        { id: "tide_low", label: "Low", val: "", type: "text" },
        { id: "tide_rising", label: "Rising", val: "", type: "text" },
        { id: "tide_falling", label: "Falling", val: "", type: "text" },
      ],
    },
    {
      id: "water",
      label: "Water Conditions",
      className: "water-form",
      fields: [
        {
          id: "wtr_temp",
          label: "Water Temperature",
          val: "",
          type: "text",
        },
      ],
    },
    {
      id: "gen",
      label: "Miscellaneous",
      className: "general-form",
      fields: [{ id: "gen_notes", label: "Notes", val: "", type: "text" }],
    },
  ],
};

export { FormData };
