import './participant.css';
import type { Iuser } from './../../../types/initData';

interface childrenProps {
	item: Iuser,
}


const Participant = ({
	item 
 }: childrenProps) => {

	return (
		<li className='item-participant'>
		<div className='participant'>
			<div>
			<div>{item.name}</div>
			<small		
			>{item.email}</small>
			</div>
		</div>
	</li>
	);

};

export default Participant;
