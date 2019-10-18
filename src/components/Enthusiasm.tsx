import * as React from 'react';
import Ready from './Ready';
import { MainConsumer } from '../context';

const Enthusiasm = () => {
    return(
        <MainConsumer>
            { (context) => {
                let { enthusiasmLevel } = context.state;
                if (enthusiasmLevel === 0) {
                    alert ("You can be more enthusiastic than that!");
                    enthusiasmLevel = 1;
                }
                return(
                    <div className="enthusiasm">
                        <div>{ enthusiasmLevel > 5 ? ( <Ready />) : (
                            <div className="greeting">
                                <h2>I'm so excited{getExclamationMarks(enthusiasmLevel)}</h2>
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

const getExclamationMarks = (numChars: any) => Array(numChars + 1).join('!');
