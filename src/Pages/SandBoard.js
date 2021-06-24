import React, { useState, useEffect } from "react";
import { apiUrl } from "../Config/constants";
import "./Style/SandBoard.css";

import Title from "../Components/Title";
import Menu from "../Components/Menu";
import AddPebbleButton from "../Components/AddPebbleButton";
import axios from "axios";

export default function SandBoard() {
	console.log(apiUrl);

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
			<div className="TopBar">
				<div className="Title">
					<Title />
				</div>
				<div className="Menu">
					<Menu />
				</div>
			</div>
			<div className="hLine"></div>
			<div className="Container">
				<div>
					{projects.map((i) => (
						<li key={i.id}>{i.name}</li>
					))}
				</div>
				<div className="AddPebble">
					<AddPebbleButton />
				</div>
			</div>
		</>
	);
}
