import React from "react";
import "./Style/SandBoard.css";

import Title from "../Components/Title";
import Menu from "../Components/Menu";
import AddPebbleButton from "../Components/AddPebbleButton";
import AddPebbleForm from "../Components/AddPebbleForm";

export default function SandBoard() {
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
				<div className="AddPebble">
					<AddPebbleButton />
				</div>
			</div>
			<AddPebbleForm />
		</>
	);
}
