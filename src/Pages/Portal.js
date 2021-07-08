// IMPORT LIBRARIES
import React, { useEffect, useState } from "react";
import axios from "axios";

// IMPORT CONFIG
import { apiUrl } from "../Config/constants";

// IMPORT STYLING
import "./Style/Portal.css";
import { Container } from "react-bootstrap";

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
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<h1 className="portalTitle">portal</h1>
				<h1 className="loginTitle">login</h1>
			</div>
			<Container fluid className="container">
				{projects.map((projects) => (
					<Project projects={projects} />
				))}
			</Container>
		</>
	);
}
