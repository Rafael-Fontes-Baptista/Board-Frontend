//IMPORT LIBRARIES & FUNCTIONS
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";

//IMPORT COMPONENTS
import Title from "../Components/Title";
import AddPebbleForm from "../Components/AddPebbleForm";

//IMPORT CONFIG
import { apiUrl } from "../Config/constants";

//IMPORT STYLING
import "./Style/SandBoard.css";

export default function SandBoard() {
	// MOTION LOGIC
	const constraintsRef = useRef(null);
	const titleDrag = useMotionValue(0);

	const routeParams = useParams();
	const projectId = routeParams.id;

	const [pebbles, set_pebbles] = useState([]);
	const [projectName, set_projectName] = useState("");

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
			<div className="TopBar">
				<div className="Title">
					<Title projectName={projectName} />
				</div>
			</div>
			<div className="hLine"></div>
			<motion.div className="Container" ref={constraintsRef}>
				{pebbles.map((i) => (
					<div className="pebble" key={i.index}>
						{i.title ? (
							<motion.div
								className="pebbleTitle"
								drag
								dragConstraints={constraintsRef}
								style={{ titleDrag }}
								dragElastic={0.9}
								dragMomentum={false}
							>
								{i.title}
							</motion.div>
						) : null}

						{i.text ? (
							<motion.div
								className="pebbleText"
								drag
								dragConstraints={constraintsRef}
								dragElastic={0.9}
								dragMomentum={false}
							>
								{i.text}
							</motion.div>
						) : null}
						{i.imgUrl ? (
							<motion.img
								drag
								dragConstraints={constraintsRef}
								dragElastic={0.9}
								dragMomentum={false}
								className="pebbleImage"
								src={i.imgUrl}
								alt=""
							/>
						) : null}
					</div>
				))}
				<div className="AddPebble">
					<AddPebbleForm />
				</div>
			</motion.div>
		</>
	);
}
