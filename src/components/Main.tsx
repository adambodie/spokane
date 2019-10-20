import * as React from "react";
import { Route, Link } from 'react-router-dom';
import Carousel from './Carousel';
import Intro from './Intro';
import IMAGES from '../images';
import about from '../images/about.jpg';

const Main = () => (
	<div className="main">
		<h1 className="title animated rollIn">Pigging Out in Spokane</h1>
		<h6 className="subtitle">A Trip Years in the Making</h6>
		<div className="squares">
		<div className="view view-first intro-first" key={10}>
			<img src={about} alt="About" />
			<div className="mask">
				<h2>0. Intro</h2>
				<Link to={{  pathname: `/main/intro`, state: { modal: true }}} className="info">Click Here</Link>
			</div>
		</div>
			{IMAGES.map(i => (
				<div className="view view-first" key={i.id}>
					<img src={i.title} alt={i.alt} />
     				<div className="mask">
     					<h2>{i.id + 1}. {i.alt}</h2>
						<Link to={{  pathname: `/main/${i.id + 1}`, state: { modal: true }}} className="info">Click Here</Link>
     				</div>
				</div>
			))}
			</div>
			{IMAGES.map(i => (
				<Route path={`/main/${i.id + 1}`} key={i.id + 1} 
					render={() => 
						<Carousel  
							minimum={i.minimum}
							maximum={i.maximum}
							previous={i.previous}
							next={i.next}
							menu={i.menu}
							alt={i.alt}
							paragraph={i.paragraph} 
							/>} 
						/>)
					)
				}
				<Route exact path="/main/intro" key="10" render={() => <Intro />} />
		</div>	
);

export default Main;


