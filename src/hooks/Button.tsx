import { useState } from 'react';
import Scungus from '../components/Scungus';

function Button() {
	const [amount, setAmount] = useState(0);
	function pressButton() {
		setAmount(amount + 1);
	}

	return (
		<div>
			<p>scungus = {amount}</p>
			<br />
			<button type='button' onClick={pressButton} aria-label='scungus:)'>
				<Scungus />
			</button>
		</div>
	);
}

export default Button;
