// IMPORT LIBRARIES
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/actions";

// IMPORT CONFIG
import { apiUrl } from "../Config/constants";

// IMPORT STYLING
import "./Style/Portal.css";
import { Container } from "react-bootstrap";

// IMPORT COMPONENTS
import Project from "../Components/Project";

export default function Portal() {
	const [projects, set_projects] = useState([]);

	const dispatch = useDispatch();
	const token = useSelector(selectToken);

	useEffect(() => {
		const getProjects = async () => {
			const res = await axios.get(`${apiUrl}`);
			set_projects(res.data.projects);
		};
		getProjects();
	}, []);

	const logout = () => {
		dispatch(logOut());
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<h1 className="portalTitle">portal</h1>

				{token ? (
					<button onClick={logout} className="buttonLogout">
						<h1 className="loginTitle">logout</h1>
					</button>
				) : (
					<h1 className="loginTitle">
						<Link to="/login">login</Link>
					</h1>
				)}
			</div>
			<Container fluid className="container">
				{projects.map((projects) => (
					<Project projects={projects} />
				))}
			</Container>
		</>
	);
}
