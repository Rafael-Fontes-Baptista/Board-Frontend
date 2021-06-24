import React, { useState } from "react";
import AddPebbleForm from "../Components/AddPebbleForm";
import { Modal } from "react-bootstrap";

import "./Style/Button.css";

<<<<<<< Updated upstream:src/Components/AddPebble.js
export default function AddPebble() {
	return <div>+</div>;
=======
export default function AddPebbleButton() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<button className="formButton" type="button" onClick={handleShow}>
				<h1 className="buttonFont">+</h1>
			</button>

			<Modal show={show} onHide={handleClose}>
				<AddPebbleForm />
			</Modal>
		</div>
	);
>>>>>>> Stashed changes:src/Components/AddPebbleButton.js
}
