import * as React from 'react';

interface Props {
    children: React.ReactNode | React.ReactNode[];
};

interface State {
	enthusiasmLevel: number;
};


const MainContext = React.createContext<Partial<Props>>({});

const { Consumer: MainConsumer } = MainContext;

class MainProvider extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	  }
	render() {
		const { children } = this.props;
		const value = {

		};
		return(
			<MainContext.Provider value={value}>
				{children}
			</MainContext.Provider>
		)
	}	
}

export const Consumer = MainContext.Consumer;

export { MainConsumer, MainProvider };