import React, { Component } from "react";
import ReactDOM from "react-dom";

import ListClients from "./listClients";
import {data} from "./json.js";

console.log(data);

const app = document.getElementById('app');

ReactDOM.render(<ListClients users={data}/>, app);