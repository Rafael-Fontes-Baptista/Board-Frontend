import React from "react";
import { Link } from "react-router-dom";

import "./Style/Portal.css";

export default function Portal() {
	return (
		<div>
			<div>
				<h1>portal</h1>
			</div>
			<div className="title">
				<Link to="/board">
					<h1>Sand BOARD</h1>
				</Link>
			</div>
		</div>
	);
}
