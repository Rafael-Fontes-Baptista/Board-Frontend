import React from "react";
import { Link } from "react-router-dom";

export default function Portal() {
	return (
		<div style={{ minWidth: "2000px" }}>
			<div>
				<h1>portal</h1>
			</div>
			<div>
				<Link to="/board">
					<h1
						style={{
							margin: "auto",
							width: "fit-content",
							color: "black",
						}}
					>
						Sandboard
					</h1>
				</Link>
			</div>
		</div>
	);
}
