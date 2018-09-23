import * as React from 'react';
import { Link } from 'react-router-dom';


export interface Props {
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}


class Hello extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
	}

	onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
	onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

	render() {

		if (this.state.currentEnthusiasm <= 0) {
			alert('You can be more enthusiastic than that!');
			this.updateEnthusiasm(1);
			
		}

    return (
		<div className="hello">
			<h1>Welcome to Spokane, how excited are you for the show?</h1>
				<div className="enthusiasm">
					<div>{ this.state.currentEnthusiasm > 5 ? ( 
						<div>
							<h4>Now You're Ready!</h4>
							<button><Link to="/main">Begin</Link></button>
						</div>
					) : (<div className="greeting">
							<h2>I'm so excited{getExclamationMarks(this.state.currentEnthusiasm)}</h2>
							<button className="decrement" onClick={this.onDecrement}>-</button>
							<button className="increment" onClick={this.onIncrement}>+</button>
						</div>)}
					</div>
				</div>
		</div>
    );
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
