import React from "react";
import "./Style/SandBoard.css";

import Title from "../Components/Title";
import Menu from "../Components/Menu";
import AddPebble from "../Components/AddPebble";

export default function SandBoard() {
	return (
		<>
			<div className="Page">
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
					<div className="AddPebble">
						<AddPebble />
					</div>
				</div>
			</div>
		</>
	);
}
