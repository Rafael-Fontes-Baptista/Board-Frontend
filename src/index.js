import React from "react";
import ReactDOM from "react-dom";
<<<<<<< Updated upstream
=======
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

>>>>>>> Stashed changes
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
