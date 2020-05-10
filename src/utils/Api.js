import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
	}
});

export function getStatusPageData(days=200) {
	return instance.get(`/statuspage/${process.env.REACT_APP_STATUSPAGE_ID}?days=${days}`)
		.then(response => response).catch((error) => { return error.response });
}

export function getIncidents(status='') {
	return instance.get(`/statuspage/${process.env.REACT_APP_STATUSPAGE_ID}/incidents?status=${status}`)
		.then(response => response).catch((error) => { return error.response });
}

export function getIncident(id) {
	return instance.get(`/statuspage/${process.env.REACT_APP_STATUSPAGE_ID}/incidents/${id}`)
		.then(response => response).catch((error) => { return error.response });
}

export function getAnnouncements(status='') {
	return instance.get(`/statuspage/${process.env.REACT_APP_STATUSPAGE_ID}/announcements?status=${status}`)
		.then(response => response).catch((error) => { return error.response });
}