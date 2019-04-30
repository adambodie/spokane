import * as React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export interface Props {
	data: never[];
	menu: string;
	alt: string;
	paragraph: string;
	minimum: number;
	maximum: number;
}

class PhotoList extends React.Component<Props>  {
	render() {
		const { data, menu, paragraph, minimum, maximum, alt } = this.props;
		const settings = {
			dots: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};
	  return(
		<div>
			<Slider {...settings}>
				{data.map((x: any, index: number) =>
					<div key={x.id}>
						<img src={menu} alt="Header" className="header"/>
						<Photo id={x.id} title={x.title} index={index + 1} />
					</div>
					).filter((x, index) => index >= minimum && index <= maximum)
				}
			</Slider>
				<div className="info">
					<h1>{alt}</h1>
					<p>{paragraph}</p>
				</div>
		</div>
		);
	}
}

export default PhotoList;
