import React from "react";
import DashboardFilter from "./components/DashboardFilter";

init()

function init() {
    let mount = document.createElement("div");
    document.body.appendChild(mount);
    React.render(<DashboardFilter />, mount);
}
