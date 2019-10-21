import * as React from "react";
import { MainConsumer } from '../context';
import MainSquareIntro from './MainSquareIntro';
import MainSquare from './MainSquare';

const MainSquares = () => (
	<MainConsumer>
		{ (context) => { 
			const { images } = context.state;
			    return (
                    <div className="squares">
                    <MainSquareIntro />
                    {images.map(i => <MainSquare id={i.id} title={i.title} alt={i.alt} key={i.id} />)}
                </div>
			)
		}}
	</MainConsumer>
);

export default MainSquares;


