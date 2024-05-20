import { Link } from 'react-router-dom';
import './registration.css';

export default function Registration() {
	return (
		<div className='Registration'>
			<ul className='Registration-nav'>
				<li>
					<Link to='/'>Event registration</Link>
				</li>

			</ul>
		</div>
	);
}
