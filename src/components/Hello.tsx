import * as React from 'react';
import Ready from './Ready';


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
	const { currentEnthusiasm } = this.state;
		if (currentEnthusiasm <= 0) {
			alert('You can be more enthusiastic than that!');
			this.updateEnthusiasm(1);
			
		}
	
    return (
		<div className="hello">
			<h1>Welcome to Spokane!!!</h1>
			<h2>How excited are you to see my Pictures?</h2>
				<div className="enthusiasm">
					<div>{ currentEnthusiasm > 5 ? ( 
						<Ready />
					) : (<div className="greeting">
							<h2>I'm so excited{getExclamationMarks(currentEnthusiasm)}</h2>
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
