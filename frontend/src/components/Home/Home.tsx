import { useState } from "react";
import Event from './Event/Event';
import { Pagination } from './Pagination';
import './home.css';
import type IEvent from './../../types/initData';

interface childrenProps {
	events: Array<IEvent>,
}
 

export default function Home({
	events 
 }: childrenProps) {

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [projectsPerPage] = useState<number>(12);
	const lastProjectIndex = currentPage * projectsPerPage;
	const firstProjectIndex = lastProjectIndex - projectsPerPage;

	const currentEvents = events ? events.slice(firstProjectIndex, lastProjectIndex) : null;

	const paginate = (pageNumbers:number) => setCurrentPage(pageNumbers);

	const lastPage = events ? Math.ceil(events.length / projectsPerPage) : 0;
	const arrOfPages: (number)[] = [];
	for(let i = 1; i <= lastPage; i++){
		arrOfPages.push(i);
	}
	

		return (
			<>
			<h3 className='home-title'>Events</h3>
			<ul className='home-events'>
			{(!!currentEvents && typeof currentEvents[0] !== 'undefined') && currentEvents.map((item) =>
				<Event item={item} key={item.id} />
			)}
		</ul>
		<Pagination
       arrOfPages={arrOfPages}
       lastPage={lastPage}
       currentPage={currentPage}
       paginate={paginate}
       />
		</>
		);
}
