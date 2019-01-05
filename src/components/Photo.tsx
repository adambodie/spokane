import * as React from 'react';

const Photo = (props: any) => (
	<div>
		<img src={`https://s3-us-west-2.amazonaws.com/spokane.bodiewebdesign.com/static/images/${props.id}_o.jpg`} alt={props.title}/>
		<h4>{props.title}</h4>
	</div>
);

export default Photo;
