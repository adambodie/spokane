import * as React from 'react';

export const MainContext = React.createContext({
	state: { enthusiasmLevel: 0},
	increment: (value: any) => {}
});

const { Consumer: MainConsumer } = MainContext;

class MainProvider extends React.Component {
	state = { enthusiasmLevel: 1 };
	render() {
		const { children } = this.props;
		return(
			<MainContext.Provider value={{
				state: this.state,
				increment: (value) =>
            		this.setState({
              			enthusiasmLevel: this.state.enthusiasmLevel + value,
            		}),
			  	}}>
				{children}
			</MainContext.Provider>
		)
	}	
}

export const Consumer = MainContext.Consumer;

export { MainConsumer, MainProvider };