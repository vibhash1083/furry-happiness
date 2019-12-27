import axios from 'axios';


export default function postApi(url,parameters) {
    return axios.post(url,parameters).then(response => {
      // returning the data here allows the caller to get it through another .then(...)
      return response.data
    })
  }
  

