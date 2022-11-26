import * as material from '@mui/material';

let scungus = 0;

const pressButton = function () {
	scungus++;
	console.log(scungus);
};

export function Button() {
	return (
		<div className='btn'>
			<material.Button
				onClick={pressButton}
				variant='outlined'
				color='success'
				size='large'
			>
				scungus:)
			</material.Button>
			<br />
			<div className='text scungus'>scungus = {scungus.toString()}</div>
		</div>
	);
}
