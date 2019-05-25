import axios from 'axios';

export default () =>{
  return axios.create({
    headers:{
      'Content-Type': 'application/json',
    },
    baseURL:'http://localhost:3000/api/translations',
  })
}
