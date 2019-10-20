import * as React from 'react';
import './styles/normalize.css';
import './styles/App.css';
import './styles/main.css';
import './styles/carousel.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from './components/Hello';
import Main from './components/Main';

const App = () => (
    <Router>
        <div className="App">
            <Route exact path = "/" render={() => <Hello />}/>
            <Route path="/main" render={() => <Main />} />
        </div>
     </Router>
    );

export default App;
