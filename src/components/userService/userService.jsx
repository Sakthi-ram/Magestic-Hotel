import axios from 'axios';

const REST_API= 'http://localhost:8080/user/dashboard';

//get All User
export const listUser=()=>axios.get(REST_API);

// create User
export const createUser=(user)=>axios.post(REST_API + '/create',user);