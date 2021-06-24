import React, { useState } from "react";
import AddPebbleForm from "../Components/AddPebbleForm";
import { Modal } from "react-bootstrap";

import "./Style/Button.css";

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
}
