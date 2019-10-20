import * as React from 'react';
import Ready from './Ready';
import { MainConsumer } from '../context';

const getExclamationMarks = (numChars: any) => Array(numChars + 1).join('!');

const Enthusiasm = () => {
    return(
        <MainConsumer>
            { (context) => {
                let { enthusiasmLevel } = context.state;
                const fontStyle = {
                    fontSize: 32 + enthusiasmLevel * 4
                };
                if (enthusiasmLevel === 0) {
                    alert ("You can be more enthusiastic than that!");
                    enthusiasmLevel = 1;
                }
                return(
                    <div className="enthusiasm animated fadeInLeft delay-2s">
                        <div>{ enthusiasmLevel > 5 ? ( <Ready />) : (
                            <div className="greeting">
                                <h2 style={fontStyle}>I'm so excited{getExclamationMarks(enthusiasmLevel)}</h2>
                                <button className="decrement" onClick={()=> context.increment(-1)}>-</button>
                                <button className="increment" onClick={()=> context.increment(1)}>+</button>
                            </div>
                            )}
                        </div>
                    </div>
				)
			}
		}
	</MainConsumer>
	)
}
export default Enthusiasm;
