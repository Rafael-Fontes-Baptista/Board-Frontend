import { Switch, Route } from "react-router-dom";
import Portal from "./Pages/Portal";
import SandBoard from "./Pages/SandBoard";

function App() {
	return (
		<div>
			<Switch>
				<Route path="/board/:id" component={SandBoard} />
				<Route path="/" component={Portal} />
			</Switch>
		</div>
	);
}

export default App;
