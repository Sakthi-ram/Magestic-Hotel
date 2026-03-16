import axios from 'axios';

const REST_API= 'http://localhost:8080/user/dashboard';

//get User
export const listUser=()=>axios.get(REST_API);
