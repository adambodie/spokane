import * as React from 'react'
import { Link } from 'react-router-dom'


const Ready = () => (
		<div>
			<h2 style={{fontSize: 60}}>Now You're Ready!</h2>
			<button className='begin'><Link to='/main'>Begin</Link></button>
		</div>
	);

export default Ready;

