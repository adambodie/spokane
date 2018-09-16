import * as React from 'react';

const Photo = (props: any) => (
	<div>
		<img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt={props.title}/>
		<h4>{props.title}</h4>
	</div>
);

export default Photo;
