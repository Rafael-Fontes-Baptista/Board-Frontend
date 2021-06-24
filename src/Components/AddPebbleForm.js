import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config/constants";

import { Modal } from "react-bootstrap";
import "./Style/Button.css";

import "./Style/Card.css";
import { Card, Form, Button } from "react-bootstrap";

export default function AddPebbleForm() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [title, set_title] = useState("");
	const [text, set_text] = useState("");
	const [imgUrl, set_imgUrl] = useState("");

	async function addPebble(event) {
		event.preventDefault();
		await axios.post(`${apiUrl}/board`, {
			title,
			text,
			imgUrl,
		});
		setShow(false);
	}

	return (
		<>
			<div>
				<button
					className="formButton"
					type="button"
					onClick={handleShow}
				>
					<h1 className="buttonFont">+</h1>
				</button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Card className="Card">
					<Card.Body>
						<Card.Title>Provide at least one</Card.Title>
						<Form>
							<Form.Label className="text-muted">
								Title
							</Form.Label>
							<Form.Group controlId="formTitle">
								<Form.Control
									type="title"
									placeholder=""
									onChange={(event) =>
										set_title(event.target.value)
									}
								/>
							</Form.Group>
							<Form.Label className="text-muted">Text</Form.Label>
							<Form.Group controlId="formText">
								<Form.Control
									as="textarea"
									rows={3}
									placeholder=""
									onChange={(event) =>
										set_text(event.target.value)
									}
								/>
							</Form.Group>
							<Form.Label className="text-muted">
								Image Url
							</Form.Label>
							<Form.Group controlId="formTile">
								<Form.Control
									type="text"
									placeholder=""
									onChange={(event) =>
										set_imgUrl(event.target.value)
									}
								/>
							</Form.Group>
							<Form.Group>
								<Button type="submit" onClick={addPebble}>
									Throw
								</Button>
							</Form.Group>
						</Form>
					</Card.Body>
				</Card>
			</Modal>
		</>
	);
}
