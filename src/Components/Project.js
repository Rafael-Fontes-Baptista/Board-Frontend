//IMPORT LIBRARIES & FUNCTIONS
import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLE

export default function Project({ projects }) {
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div key={projects.id} style={{ margin: "50px" }}>
				<Link to={`/board/${projects.id}`}>
					<p
						style={{
							width: "fit-content",
							margin: "auto",
						}}
					>
						{projects.name}
					</p>

					<img
						src={projects.bgImgUrl}
						alt={projects.name}
						style={{
							width: "300px",
							height: "200px",
							objectFit: "cover",
							borderRadius: "20px",
						}}
					></img>
				</Link>
			</div>
		</div>
	);
}
