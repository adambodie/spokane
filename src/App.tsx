import * as React from 'react';
import './normalize.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Hello from './components/Hello';
import Main from './components/Main';

class App extends React.Component {
  public render() {
    return (
    <Router>
      <div className="App">
        <Route exact path = "/" render={() => <Hello enthusiasmLevel={1} />}/>
        <Route path="/main" render={() => <Main title={"Welcome to Spokane"} />} />
      </div>
     </Router>
    );
  }
}

export default App;
