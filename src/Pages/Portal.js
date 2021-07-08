// IMPORT LIBRARIES
import React, { useEffect, useState } from "react";
import axios from "axios";

// IMPORT CONFIG
import { apiUrl } from "../Config/constants";

// IMPORT STYLING
import "./Style/Portal.css";

// IMPORT COMPONENTS
import Project from "../Components/Project";

export default function Portal() {
	const [projects, set_projects] = useState([]);

	useEffect(() => {
		const getProjects = async () => {
			const res = await axios.get(`${apiUrl}`);
			set_projects(res.data.projects);
		};
		getProjects();
	}, []);

	return (
		<>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h1
					style={{
						marginLeft: "1vw",
						marginTop: "1vh",
					}}
				>
					portal
				</h1>
				<h1
					style={{
						marginRight: "1vw",
						marginTop: "1vh",
					}}
				>
					login
				</h1>
			</div>
			<div style={{ height: "80vh" }}>
				{projects.map((projects) => (
					<Project projects={projects} />
				))}
			</div>
		</>
	);
}
