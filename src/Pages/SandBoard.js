//IMPORT LIBRARIES & FUNCTIONS
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//IMPORT COMPONENTS
import Title from "../Components/Title";
import AddPebbleForm from "../Components/AddPebbleForm";

//IMPORT CONFIG
import { apiUrl } from "../Config/constants";

//IMPORT STYLING
import "./Style/SandBoard.css";

import { motion } from "framer-motion";

export default function SandBoard() {
	const constraintsRef = useRef(null);

	const routeParams = useParams();
	const projectId = routeParams.id;

	const [pebbles, set_pebbles] = useState([]);
	const [projectName, set_projectName] = useState("");
	const [saveBoard, set_saveBoard] = useState(false);

	function saveFunction() {
		set_saveBoard(!saveBoard);
	}

	useEffect(() => {
		const getData = async () => {
			const resPebbles = await axios.get(`${apiUrl}/board/${projectId}`);
			const resProjectName = await axios.get(`${apiUrl}/${projectId}`);
			set_pebbles(resPebbles.data.Pebbles);
			set_projectName(resProjectName.data.projectName.name);
		};
		getData();
	}, [projectId]);

	return (
		<>
			<div className="topBar">
				<div className="title">
					<Title projectName={projectName} />
				</div>
			</div>

			<div className="hLine"></div>
			<motion.div className="boardContainer" ref={constraintsRef}>
				{pebbles.map((i) => (
					<>
						<motion.div
							className="pebble"
							key={i.id}
							drag
							dragConstraints={constraintsRef}
							dragElastic={0.9}
							dragMomentum={false}
						>
							{i.title ? (
								<div className="pebbleTitle">
									<h1 style={{ fontWeight: "bolder" }}>
										{i.title}
									</h1>
								</div>
							) : null}
							{i.text ? (
								<div className="pebbleText">{i.text}</div>
							) : null}
						</motion.div>

						{i.imgUrl ? (
							<motion.img
								src={i.imgUrl}
								alt=""
								className="pebbleImage"
								drag
								dragConstraints={constraintsRef}
								dragElastic={0.9}
								dragMomentum={false}
							/>
						) : null}
					</>
				))}

				<div className="addPebble">
					{saveBoard ? null : <AddPebbleForm />}
				</div>
			</motion.div>
			<button className="saveButton" onClick={saveFunction}>
				{saveBoard ? "re-open" : "save"}
			</button>
		</>
	);
}
