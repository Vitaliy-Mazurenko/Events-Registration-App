import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import './App.css'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
		fetch('http://localhost:4000/api/')
		.then((res) => res.json())
		.then((result) => setEvents(result.data));
	}, []);
	console.log(events);

  return (
    <div className='App'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								events={events}

							/>
						}
					/>
					<Route
						path='/registration'
						element={
							<Registration
							/>
						}
					/>
				</Routes>
			</Router>
	</div>
  )
}

export default App
