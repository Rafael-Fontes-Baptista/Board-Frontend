import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { apiUrl } from "../Config/constants";

export default function Portal() {
	const [projects, set_projects] = useState([]);

	useEffect(() => {
		const getProjects = async () => {
			const res = await axios.get(`${apiUrl}`);
			set_projects(res.data.projects);
		};
		getProjects();
	}, []);

	//submit => NO prevent default, reload page
	//get userId
	//

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
			<div>
				{/* 		{projects.map((i) => (
					<li key={i.id}>{i.name}</li>
				))} */}
			</div>
		</div>
	);
}
