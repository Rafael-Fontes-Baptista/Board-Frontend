import React from "react";
import "./Style/Card.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function AddPebbleForm() {
	return (
		<>
			<Card className="Card">
				<Card.Body>
					<Card.Title>Provide at least one</Card.Title>
					<Form>
						<Form.Text className="text-muted">Title</Form.Text>
						<Form.Group controlId="formTile">
							<Form.Control type="title" placeholder="" />
						</Form.Group>
						<Form.Text className="text-muted">Text</Form.Text>
						<Form.Group controlId="formText">
							<Form.Control type="text" placeholder="" />
						</Form.Group>
						<Form.Text className="text-muted">Image Url</Form.Text>
						<Form.Group controlId="formTile">
							<Form.Control type="text" placeholder="" />
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
}
