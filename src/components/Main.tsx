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
			<h1 className="title">{this.props.title}</h1>
			<h6 className="subtitle">{this.props.subtitle}</h6>
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
			<h1>Intro</h1>
			<p>Years ago, in 2006, when Adam headed off the Minneapolis to go to school at the University of Minnesota, him and his Dad embarked on a cross country trip to Minneapolis.  During that trip, they drove through Spokane, stopping for lunch, on the way to spend the night in Montana.  But just before entering Spokane, a view of the city opened up, which Adam attempted to take a picture of, but just missed.</p>
			<p>It was with that miss that stuck with Adam, and made him curious about visiting Spokane.  A trip nearly came to fruition in 2016, when Adam headed out to Walla Walla, Washington.  But with the Men's NCAA Basketball Tournament hosting games for the weekend, in part due to the popularity of local Gonzaga University's basketball team, a trip during this time seemed unrealistic.</p>
			<p>As the months went by afterwards, Adam found equally interesting places to visits, mostly closer to home, from Bellingham to Port Angeles (with ferry ride to Victoria, B.C.), a couple were further away (who could forget the 600 mile drive to Reno?).  But Spokane was still on Adam's mind.  Then in June, Adam finally decided to go to Spokane.  But he wasn't totally up to it, so a closer trip to Leavenworth was made instead.  Then August came, and Adam really wanted to go, but wasn't feeling well, another cancellation.  Finally came Labor Day Weekend.  This was the last chance to go.  Adam needed to go.  And Adam did go.  Here's the story of how Adam finally made it to Spokane.</p>
		</div>
		
    );
  }
}

export default Main;


