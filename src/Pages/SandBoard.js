import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from "../Config/constants";
import axios from "axios";
import { motion, useMotionValue } from "framer-motion";

import "./Style/SandBoard.css";

import Title from "../Components/Title";
import AddPebbleForm from "../Components/AddPebbleForm";

export default function SandBoard() {
	const [pebbles, set_pebbles] = useState([]);

	const constraintsRef = useRef(null);
	const titleDrag = useMotionValue(0);

	console.log(titleDrag);

	useEffect(() => {
		const getPebbles = async () => {
			const res = await axios.get(`${apiUrl}/board`);
			set_pebbles(res.data.Pebbles);
		};
		getPebbles();
	}, []);

	return (
		<>
			<div className="TopBar">
				<div className="Title">
					<Title />
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
								drag
								dragConstraints={constraintsRef}
								dragElastic={0.9}
								dragMomentum={false}
								className="pebbleText"
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
