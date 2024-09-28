export interface Iuser {
	name: string;
	email: string;
	dateOfBirth: string;
	whereHeard: 'social media' | 'friends' | 'found myself' | '',
}

export default interface IEvent {
	id: string;
	_id?: string;
	title: string;
	description: string;
	event_date: string;
	organizer: string;
    participants: Array<Iuser>;
}