import './app.css';
import { Chucky } from './Chucky';
import { dog } from './test';
import Button from '../hooks/Button';

const App = () => {
	dog();
	return (
		<div className="root">
			<h1>this is chucky</h1>
			<div className="text center top">chucky can spin</div>
			<Chucky />
			<br />
			<h1>and this is scungus:)</h1>
			<div className="text center top">
				you can click on scungus:)
				<br />
				doing so will increase your scungus:)
				<br />
				try it~!
				<br />
				<Button />
				<img
					className="scungus"
					aria-label="scungus:)"
					src="./scungus.gif"
				></img>
			</div>
		</div>
	);
};

export default App;
