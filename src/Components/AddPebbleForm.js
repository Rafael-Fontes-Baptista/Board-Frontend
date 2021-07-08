// IMPORT LIBRARIES AND FUNCTIONS
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//IMPORT CONFIG
import { apiUrl } from "../Config/constants";

// IMPORT STYLING
import { Modal } from "react-bootstrap";
import { Card, Form, Button } from "react-bootstrap";
import "./Style/Button.css";
import "./Style/Card.css";

export default function AddPebbleForm() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const routeParams = useParams();
	const projectId = routeParams.id;

	const [title, set_title] = useState("");
	const [text, set_text] = useState("");
	const [imgUrl, set_imgUrl] = useState("");

	async function addPebble(event) {
		await axios.post(`${apiUrl}/board`, {
			title,
			text,
			imgUrl,
			projectId,
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
