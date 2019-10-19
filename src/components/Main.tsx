import * as React from "react";
import { Route, Link } from 'react-router-dom';
import Carousel from './Carousel';
import MainParagraph from './MainParagraph';
import IMAGES from '../images';
import about from '../images/about.jpg';

export interface Props {
  title: string;
  subtitle: string;
}

class Main extends React.Component<Props> {
	render() {
	const { title, subtitle } = this.props;
    return (
		<div className="main">
			<h1 className="title animated rollIn">{title}</h1>
			<h6 className="subtitle">{subtitle}</h6>
			<div className="squares">
			{IMAGES.map(i => (
				<div className="view view-first" key={i.id}>
					<img src={i.title} alt={i.alt} />
     				<div className="mask">
     					<h2>{i.id + 1}. {i.alt}</h2>
						 <Link to={{  pathname: `/main/${i.id + 1}`, state: { modal: true }}} className="info">Click Here</Link>
     				</div>
				</div>
			))
		}
			<div className="view view-first" key={10}>
			<img src={about} alt="About" />
     				<div className="mask">
     					<h2>10. About</h2>
						 <Link to={{  pathname: `/main/about`, state: { modal: true }}} className="info">Click Here</Link>
     				</div>
				</div>
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
				<Route exact path="/main/about" key="10" render={() => <MainParagraph />} />
		</div>
		
    );
  }
}

export default Main;


