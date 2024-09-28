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

	const date_to = {
		short_month: (date: Date) => date.toLocaleString('en-US', { month: 'short' }),
		hours_12: (date: Date) => date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
		short_year: (date: Date) => date.toLocaleString('en-US', { year: '2-digit' })
	}
	
	
const date_to_format = (date_raw: string | Date, type: string) => {
		const date = typeof(date_raw) === 'string' ? new Date(date_raw) : date_raw;
		switch (type) {
			case 'date_shortened':
				return `${date_to.short_month(date)} ${date.getDate()}, ${date.getFullYear()}`;
			case 'date_short_time_full':
				return `${date.getMonth() + 1}/${date.getDate()}/${date_to.short_year(date)}, ${date_to.hours_12(date)}`;
			default:
				return date;
		}
	}

	const event_date: string | Date  = item.event_date ? (date_to_format(item.event_date, 'date_shortened')) : '';

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
			<small>{typeof event_date === 'object' ? event_date.toLocaleString() : event_date}</small>
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
