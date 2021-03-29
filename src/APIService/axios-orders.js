import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-81ac6-default-rtdb.firebaseio.com/'
});

export default instance;
