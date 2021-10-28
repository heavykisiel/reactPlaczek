import wydawcy from "./wydawcy.json";
import Wydawca from "./Wydawca";

function App() {
	var i = 0;
  return (
    <main>
	{wydawcy.map((val,key) => {
		i++;
		return <Wydawca key={key} index={i} {...val} />
	})}
	</main>
  );
}

export default App;
