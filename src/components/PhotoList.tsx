import * as React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';
import CarouselLinks from './CarouselLinks';

export interface Props {
	data: never[];
	menu: string;
	alt: string;
	paragraph: string;
	minimum: number;
	maximum: number;
	previous: string;
	next: string;
}

class PhotoList extends React.Component<Props>  {
	render() {
		const { data, menu, paragraph, minimum, maximum, alt, previous, next } = this.props;
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
						<h1>{alt}</h1>
						<Photo id={x.id} title={x.title} index={index + 1} />
					</div>
					).filter((x, index) => index >= minimum && index <= maximum)
				}
			</Slider>
			<CarouselLinks previous={previous} next={next} paragraph={paragraph} />
		</div>
		);
	}
}

export default PhotoList;
