import { useParams, Link } from 'react-router-dom';
import './participants.css';
import type IEvent from './../../types/initData';
import Participant from './Participant/Participant';

interface childrenProps {
	events: Array<IEvent>,
}

export default function Participants({
	events 
 }: childrenProps) {
	const params = useParams();
	const page = params.id;

	const participantsEvent = events.find(
		(event) => (event.id === page)
	  );

	return (
		<div className='Registration'>
			<div className='Registration-nav'>
				<p className='btn-back'>
					<Link to='/'>back</Link>
				</p>
				<h3 className='home-title'>"Awesome Event" participants</h3>
			<ul className='home-events'>
			{(!!participantsEvent && typeof participantsEvent !== 'undefined') && participantsEvent.participants.map((item, i) =>
				<Participant item={item} key={i} />
			)}
		</ul>
					
			</div>
		</div>
	);
}
