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

	const goToRegister = (shop: string | undefined) => {
		console.log(shop);
		navigate('/registration');
	};



	return (
		<li className='item'>
		<div className='group'>
			<h5>{item.title}</h5>
			<p>{item.description}</p>
			<div>
			<small
			id={item.id}
			>{item.event_date}</small>
			<small
			id={item.id}			
			>{item.organizer}</small>

			</div>
			<div>
			<span
			id={item.id}
			onClick={(e) => goToRegister(item.id)}
			>Register</span>
			<span
			id={item.id}			
			>View</span>

			</div>
		</div>
	</li>
	);

};

export default Event;
