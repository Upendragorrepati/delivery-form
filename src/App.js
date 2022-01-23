import { Routes, Route } from 'react-router-dom';
import DeliveryForm from './Components/DeliveryForm';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="delivery" element={<DeliveryForm />} />
			</Routes>
		</div>
	);
}

export default App;
