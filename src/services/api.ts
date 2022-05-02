import axios from 'axios';

const customersDB = axios.create({
	baseURL: 'http://localhost:3001/',
});

export default customersDB;
