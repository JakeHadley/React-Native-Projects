import axios from 'axios';

//this url has to be updated every time we restart ngrok
export default axios.create({
  baseURL: 'http://53d8f2f0.ngrok.io'
});
