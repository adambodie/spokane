import * as React from "react";

import { Route, Link } from 'react-router-dom';

import Carousel from './Carousel';

import IMAGES from '../images';

export interface Props {
  title: string;
  subtitle: string;
}


class Main extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
    return (
		<div className="main">
			<h1>{this.props.title}</h1>
			<h6>{this.props.subtitle}</h6>
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
							alt={i.alt}
							paragraph={i.paragraph} 
							/>} 
						/>)
					)
				}
		
		</div>
		
    );
  }
}

export default Main;


