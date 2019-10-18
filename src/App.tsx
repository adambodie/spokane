import * as React from 'react';
import './styles/normalize.css';
import './styles/App.css';
import './styles/main.css';
import './styles/carousel.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Hello from './components/Hello';
import Main from './components/Main';

class App extends React.Component {
  public render() {
    return (
    <Router>
      <div className="App">
        <Route exact path = "/" render={() => <Hello />}/>
        <Route path="/main" render={() => <Main title={"Pigging Out in Spokane"} subtitle={"A Trip Years in the Making"} />} />
      </div>
     </Router>
    );
  }
}

export default App;
