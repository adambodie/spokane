import * as React from "react";
import { Route } from 'react-router-dom';
import Carousel from './Carousel';

const MainRoute = ({minimum, maximum, previous, next, menu, alt, paragraph, id}: any) => (
    <Route  path={`/main/${id + 1}`} key={id + 1} 
        render={() => 
            <Carousel  
                minimum={minimum}
                maximum={maximum}
                previous={previous}
                next={next}
                menu={menu}
                alt={alt}
                paragraph={paragraph} 
            />} 
    />
);

export default MainRoute;