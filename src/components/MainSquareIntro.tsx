import * as React from "react";
import { Link } from 'react-router-dom';
import about from '../images/about.jpg';

const MainSquareIntro = () => (
    <div className="view view-first intro-first" key={0}>
        <img src={about} alt="About" />
        <div className="mask">
            <h2>0. Intro</h2>
            <Link to={{  pathname: `/main/intro`, state: { modal: true }}} className="info">Click Here</Link>
        </div>
    </div>
)


export default MainSquareIntro;


