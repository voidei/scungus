import "./app.css";
import { Chucky } from "./Chucky";
import { dog } from "./test";

const App = () => {
	dog();
	return (
		<div className="root">
			<h1>this is chucky</h1>
			<div className="text center top">chucky can spin</div>
			<Chucky></Chucky>
		</div>
	);
};

export default App;

