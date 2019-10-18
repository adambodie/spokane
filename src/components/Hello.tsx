import * as React from 'react';
import { MainProvider } from '../context';
import Enthusiasm from './Enthusiasm';

const Hello = () => (
	<MainProvider>
		<div className="hello">
			<h1>Welcome to Spokane!!!</h1>
			<h2>How excited are you to see my Pictures?</h2>
			<Enthusiasm />
		</div>
	</MainProvider>
);


export default Hello;
