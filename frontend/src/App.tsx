import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Participants from './components/Participants/Participants';
import type IEvent from './types/initData';
import './App.css'

function App() {
  const [events, setEvents] = useState<Array<IEvent>>([]);
console.log(events);
  const updateEvents = (newEvents: Array<IEvent>) => {
	setEvents(newEvents);
};

  useEffect(() => {
		fetch('http://localhost:4000/api/')
		.then((res) => res.json())
		.then((result) => setEvents(result));
	}, []);

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
						path='/registration/:id'
						element={
							<Registration
							events={events}
							updateEvents={updateEvents}
							/>
						}
					/>
					<Route
						path='/participants/:id'
						element={
							<Participants
							events={events}
							/>
						}
					/>
				</Routes>
			</Router>
	</div>
  )
}

export default App
