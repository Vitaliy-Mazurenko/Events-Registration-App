import './event.css';
import type IEvent from './../../../types/initData';
import { useNavigate } from 'react-router-dom';

interface childrenProps {
	item: IEvent,
}


const Event = ({
	item 
 }: childrenProps) => {
	const navigate = useNavigate();

	const goToRegister = (id: string | undefined) => {
		if (id) {
			navigate(`/registration/${id}`);
		}
	};

	const goToParticipants = (id: string | undefined) => {
		if (id) {
			navigate(`/participants/${id}`);
		}
	};


	return (
		<li className='item'>
		<div className='group'>
			<h5>{item.title}</h5>
			<p>{item.description}</p>
			<div>
			<small>
			{item.event_date}</small>
			<small>			
			{item.organizer}</small>

			</div>
			<div>
			<span
			id={item.id}
			onClick={() => goToRegister(item.id)}
			>Register</span>
			<span
			id={item.id}
			onClick={() => goToParticipants(item.id)}			
			>View</span>

			</div>
		</div>
	</li>
	);

};

export default Event;
