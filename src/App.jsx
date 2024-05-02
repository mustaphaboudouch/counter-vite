import React from 'react';

function App() {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h1>Counter Vite</h1>

			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
		</div>
	);
}

export default App;
