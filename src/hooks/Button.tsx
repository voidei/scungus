import { useState } from 'react';

function Button() {
	const [amount, setAmount] = useState(0);
	function pressButton() {
		setAmount(amount + 1);
	}

	return (
		<div>
			<p>scungus = {amount}</p>
			<br />
			<button type="button" onClick={pressButton}>
				hi
			</button>
		</div>
	);
}

export default Button;

//function Example() {
// declare a new state variable called scungus
//	const [amount, setAmount] = useState(0);
//
//	return (
//		<div>
//			<p>You clicked {amount} times</p>
//			<button type="button" onClick={pressButton}>
//				hi
//			</button>
//		</div>
//	);
//}
