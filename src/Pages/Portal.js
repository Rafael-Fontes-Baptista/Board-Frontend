import React from "react";
import { Link } from "react-router-dom";

export default function Portal() {
	//submit => NO prevent default, reload page
	//get userId
	//

	return (
		<div>
			<div>portal</div>
			<div>login</div>
			<Link to="/board">Sandboard</Link>
			{/* {isLoggedIn ? (.map(projects etc...))} : null */}
		</div>
	);
}
