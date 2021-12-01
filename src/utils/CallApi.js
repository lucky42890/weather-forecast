import axios from 'axios'

const instance = axios.create({
	withCredentials: false,
	headers: {
		'Content-Type': 'application/json'
	}
})

export default instance;
