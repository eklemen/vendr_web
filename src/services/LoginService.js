import api from './apiEndpoints';
import axios from 'axios';

export const igLogin = () => {
  axios.get(api.login).then(r => {
    console.log('---------=>', r);
    return r
  }).catch(e => {
    console.log(e);

  })
};