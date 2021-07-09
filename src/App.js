import { Switch, Route } from "react-router-dom";
import Portal from "./Pages/Portal";
import SandBoard from "./Pages/SandBoard";
import Login from "./Pages/Login";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Portal} />
				<Route path="/login" component={Login} />
				<Route path="/board/:id" component={SandBoard} />
			</Switch>
		</div>
	);
}

export default App;
