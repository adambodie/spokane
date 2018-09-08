import * as React from 'react';
import './normalize.css';
import './App.css';

import Hello from './components/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello enthusiasmLevel={1} />
      </div>
    );
  }
}

export default App;
