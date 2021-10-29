import wydawcy from "./wydawcy.json";
import Wydawca from "./Wydawca";
import { Component } from "react";
class Appw extends Component{
    increment() {
	
        this.Wydawca((prevState) => {
			prevState.counter =0
            let prev = prevState.counter;
            prev = prev + 1;
			if(prev>11) prev =1;
            return { counter: prev };
        })

    }
    render() {
        const { counter } = this.state;
        return (
			<div></div>
        );
    }
}
function App() {
	var i = 0;
  return (
    <main>
	{wydawcy.map((val,key) => {
		i++;
		return <Wydawca key={key} index={Appw.increment()} {...val} />
	})}
	</main>
  );
}

export default App;
