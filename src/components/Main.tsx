import * as React from "react";
import postFalls from '../images/post-falls.jpg';
import cda from '../images/cda.jpg';
import cda2 from '../images/cda2.jpg';
import riverfront from '../images/riverfront.jpg';
import upper from '../images/upper.jpg';
import lower from '../images/lower.jpg';
import manito from '../images/manito.jpg';
import huntington from '../images/huntington.jpg';
import spokane from '../images/spokane.jpg';
import cheesecake from '../images/cheesecake.jpg';
import doner from '../images/doner.jpg';
import elk from '../images/elk.jpg';
import bacon from '../images/bacon.jpg';
import berry from '../images/berry.jpg';
import fry from '../images/fry.jpg';
import ibajella from '../images/ibajella.jpg';
import nitrogen from '../images/nitrogen.jpg';
import oreo from '../images/oreo.jpg';


import { Route, Link } from 'react-router-dom';

import Carousel from './Carousel';

export interface Props {
  title: string;
}

const IMAGES = [
	{ id: 0, title: riverfront, alt: "Riverfront Park", photoset_id: "72157698061989302", per_page: "23", menu: cheesecake },
	{ id: 1, title: upper, alt: "Upper Spokane Falls", photoset_id: "72157700993311464", per_page: "12", menu: doner },
	{ id: 2, title: lower, alt: "Lower Spokane Falls" , photoset_id: "72157700993352014", per_page: "16", menu: elk },
	{ id: 3, title: postFalls, alt: "Post Falls", photoset_id: "72157695417499760", per_page: "7", menu: bacon }, 
	{ id: 4, title: cda, alt: "Coeur d'Alene Resort" , photoset_id: "72157700982006424", per_page: "38", menu: fry },
	{ id: 5, title: cda2, alt: "Coeur d'Alene" , photoset_id: "72157699685111191", per_page: "14", menu: ibajella},
	{ id: 6, title: spokane, alt: "Spokane", photoset_id: "72157699685111191", per_page: "12", menu: berry }, 	
	{ id: 7, title: manito, alt: "Manito Park" , photoset_id: "72157700993437424", per_page: "19", menu: oreo},
	{ id: 8, title: huntington, alt: "Huntington Park" , photoset_id: "72157673361168848", per_page: "25", menu: nitrogen}
];


class Main extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
    return (
		<div className="main">
			<h1>{this.props.title}</h1>
			<h6>An Almost Perfect Trip Years in the Making</h6>
			<div className="squares">
				{IMAGES.map(i => (
					<div className="square" key={i.id} >
						<Link to={{  pathname: `/main/${i.id + 1}`, state: { modal: true }}}>
							<div className="side-a">
								<img src={i.title} alt={i.alt} />
							</div>
							<div className="side-b">
								<h5>{i.id + 1}. {i.alt}</h5>
							</div>
						</Link>	
					</div>
					))
					}
			</div>
			{IMAGES.map(i => (
				<Route path={`/main/${i.id + 1}`} key={i.id + 1} 
					render={() => 
						<Carousel 
							photoset_id={i.photoset_id} 
							per_page={i.per_page}
							menu={i.menu} 
							/>} 
						/>)
					)
				}
		
		</div>
		
    );
  }
}

export default Main;


