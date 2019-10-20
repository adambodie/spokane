import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
	paragraph: string;
	previous: string;
	next: string;
}

class CarouselLinks extends React.Component<Props>  {
	render() {
		const { paragraph, previous, next } = this.props;
	    return(
			<div className="info">
				<p>{paragraph}</p>
				<div className="arrowContainer">
					<Link to={{  pathname: `/main/${previous}`, state: { modal: true }}} className="arrows">Prev</Link>
					<Link to={{  pathname: `/main/${next}`, state: { modal: true }}} className="arrows">Next</Link>
				</div>
			</div>
		);
	}
}

export default CarouselLinks;