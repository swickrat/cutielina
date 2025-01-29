import { BrowserRouter } from "react-router-dom";

import Counter from "./components/counter";

function App() {
	return (
		<BrowserRouter>
			<main className="flex h-screen flex-col items-center justify-center bg-color text-tertiary">
				<Counter />
			</main>
		</BrowserRouter>
	);
}

export default App;
