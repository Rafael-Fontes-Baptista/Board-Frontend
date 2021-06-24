import React, { useState } from "react";
import "./Style/Card.css";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddPebbleForm() {
	const [title, set_title] = useState("");
	const [text, set_text] = useState("");
	const [imgUrl, set_imgUrl] = useState("");

	async function addPebble(event) {
		event.preventDefault();
		await axios.post(`http://localhost:4000/board`, {
			title,
			text,
			imgUrl,
		});
	}

	return (
		<>
			<Card className="Card">
				<Card.Body>
					<Card.Title>Provide at least one</Card.Title>
					<Form>
						<Form.Label className="text-muted">Title</Form.Label>
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
		</>
	);
}
