import * as React from "react";
import { Route } from 'react-router-dom';
import Intro from './Intro';
import MainRoute from './MainRoute';
import { MainConsumer } from '../context';

const MainRoutes = () => (
	<MainConsumer>
		{ (context) => { 
			const { images } = context.state;
			    return (
                    <React.Fragment>
			            {images.map(i => ( 
							<MainRoute 	minimum={i.minimum} 
										maximum={i.maximum} 
										previous={i.previous} 
										next={i.next} 
										menu={i.menu} 
										alt={i.alt} 
										paragraph={i.paragraph} 
										id={i.id}
										key={i.id}
										/>
								)
					        )
				        }
				        <Route exact path="/main/intro" key="10" render={() => <Intro />} />
                    </React.Fragment>
			)

		}}
	
		</MainConsumer>	
);

export default MainRoutes;


