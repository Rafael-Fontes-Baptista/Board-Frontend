//IMPORT LIBRARIES & FUNCTIONS
import React from "react";
import { Link } from "react-router-dom";

//IMPORT STYLING
import "./Style/Title.css";
import { motion } from "framer-motion";

export default function Title(projectName) {
	return (
		<div className="wrap">
			<motion.div
				className="portal"
				whileHover={{
					x: "5%",
					y: 0,
					scale: 1.1,
					rotate: 0,
					transition: { duration: 0.5 },
				}}
			>
				<Link to="/" className="portalLink">
					<h1>portal</h1>
				</Link>
			</motion.div>

			<div className="title">
				<h1 className="projectTitle">{projectName.projectName} </h1>
				<h1 className="board">BOARD</h1>
			</div>
			<div className="emptyRight"></div>
		</div>
	);
}
