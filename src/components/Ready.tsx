import * as React from 'react';
import { Link } from 'react-router-dom';


const Ready = () => (
		<div>
			<h4>Now You're Ready!</h4>
			<button className="begin"><Link to="/main">Begin</Link></button>
		</div>
	);

export default Ready;

