import * as React from "react";
import postFalls from '../images/post-falls.jpg';
import cda from '../images/cda.jpg';
import cda2 from '../images/cda2.jpg';
import riverfront from '../images/riverfront.jpg';
import upper from '../images/upper.jpg';
import lower from '../images/lower.jpg';
import manito from '../images/manito.jpg';
import huntington from '../images/huntington.jpg';
import { Route, Link } from 'react-router-dom';
import Carousel from './Carousel';

export interface Props {
  title: string;
}

const IMAGES = [
	{ id: 0, title: riverfront, alt: "Riverfront", photoset_id: "72157687042225613", per_page: "38" },
	{ id: 1, title: upper, alt: "Upper Spokane Falls", photoset_id: "72157687042225613", per_page: "38" },
	{ id: 2, title: lower, alt: "Lower Spokane Falls" , photoset_id: "72157687042225613", per_page: "38"},
	{ id: 3, title: postFalls, alt: "Post Falls", photoset_id: "72157687042225613", per_page: "38" },
	{ id: 4, photoset_id: "72157687042225613", per_page: "38" },  
	{ id: 5, title: cda, alt: "Coeur d'Alene" , photoset_id: "72157687042225613", per_page: "38"},
	{ id: 6, title: cda2, alt: "Coeur d'Alene" , photoset_id: "72157687042225613", per_page: "38"},
	{ id: 7, title: manito, alt: "Manito Park" , photoset_id: "72157687042225613", per_page: "38"},
	{ id: 8, title: huntington, alt: "Huntington Park" , photoset_id: "72157687042225613", per_page: "38"}
];


class Main extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
    return (
		<div className="main">
			<h1>{this.props.title}</h1>
			<div className="squares">
				{IMAGES.map(i => (
					<div className="square">
						<Link  key={i.id}  to={{  pathname: `/main/${i.id + 1}`, state: { modal: true }}}>
							<img src={i.title} alt={i.alt} style={{width: 200, height: 150}}/>
						</Link>
					</div>))
					}
			</div>
			{IMAGES.map(i => (
				<Route path={`/main/${i.id + 1}`} key={i.id + 1} 
					render={() => 
						<Carousel 
							photoset_id={i.photoset_id} 
							per_page={i.per_page} 
							/>} 
						/>)
					)
				}
		
		</div>
		
    );
  }
}

export default Main;


