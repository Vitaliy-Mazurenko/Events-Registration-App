import { useParams, useNavigate, Link } from 'react-router-dom';
import './registration.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import type IEvent from './../../types/initData';
import type { Iuser } from './../../types/initData';
import { useState } from 'react';

interface childrenProps {
	events: Array<IEvent>,
	updateEvents: (newEvents: Array<IEvent>) => void,
}

export default function Registration({
	events, updateEvents 
 }: childrenProps) {
	const params = useParams();
	const page = params.id;
	const navigate = useNavigate();

	const [user, setUser] = useState<Iuser>({
		name: '',
		email: '',
		dateOfBirth: '',
		whereHeard: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setUser({
			...user,
			[e.target.name]: value,
		});
	};

	const registrationFetch = async (eventRegistration: Iuser[], eventId: string | undefined) => {
		console.log(eventRegistration);
		return await fetch(`http://localhost:4000/registration/${eventId}/`, {
			method: 'PATCH',
			body: JSON.stringify({
				participants: eventRegistration
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
		.catch((error) => {
		console.error('Error sending request:', error);
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();
		if (
			!user.name ||
			!user.email ||
			!user.dateOfBirth ||
			!user.whereHeard
		) {
			alert('Please, fill in all fields');
		} else {
			const eventRegistration: Array<IEvent> =  JSON.parse(JSON.stringify(events));
			for(let i = 0; i < events.length; i++) {
				if(events[i].id === page) {
					eventRegistration[i].participants.push(user);
					registrationFetch(eventRegistration[i].participants, events[i].id);
					break;
				}
			}

			updateEvents(eventRegistration);
			
			setUser({
				name: '',
				email: '',
				dateOfBirth: '',
				whereHeard: '',
			});
			navigate('/');
		}
	};

	return (
		<div className='Registration'>
			<div className='Registration-nav'>
				<p className='btn-back'>
					<Link to='/'>back</Link>
				</p>
				<h3 className='registration-title'>Event registration</h3>
					<form onSubmit={handleSubmit} className='form-registration'>
						<label htmlFor='name'>
							<div>Full name:</div>
							<Input
								required
								type='text'
								name='name'
								placeholder='Enter full name'
								onChange={handleChange}
							/>
						</label>
						<label htmlFor='email'>
							<div>Email:</div>
							<Input
								required
								type='email'
								name='email'
								placeholder='Enter email'
								onChange={handleChange}
							/>
						</label>
						<label htmlFor='dateOfBirth'>
							<div>Date of birth:</div>
							<Input
								required
								type='dateOfBirth'
								name='dateOfBirth'
								placeholder='Enter date of birth'
								onChange={handleChange}
							/>
						</label>
							<div className='checkbox-label'>Where did you hear about this event?</div>
						<div className='checkbox'>
						<input type="radio" name='whereHeard' value='social media'
      checked={user.whereHeard == 'social media' ? true : false}
      onChange={handleChange} />
		<span className='checkbox-name'>Social media</span>

      <input type="radio" name='whereHeard' value='friends'
      checked={user.whereHeard == 'friends' ? true : false}
      onChange={handleChange} />
		<span className='checkbox-name'>Friends</span>

      <input type="radio" name='whereHeard' value='found myself'
      checked={user.whereHeard == 'found myself' ? true : false}
      onChange={handleChange} />
		<span className='checkbox-name'>Found myself</span>
						</div>
						<Button text='Submit' className='btn-submit' />
					</form>
			</div>
		</div>
	);
}
