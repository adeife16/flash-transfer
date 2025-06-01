import * as React from "react";
import Switch from "@mui/material/Switch";
import "../../index.css"

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function AppSwitch() {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
}
