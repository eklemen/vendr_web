import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('vendrToken');
export default (
  {
    name, // required
    endpoint,
    reqObject = {},
    params = {},
    headers = {},
    method = 'get',
    saveToStore = true,
    ...rest
  }
) => {
  if (typeof name !== 'string') throw new Error('Must provide a `name` for this query.');
  return dispatch => {
    dispatch({type: `QUERY_PENDING_${name}`, payload: {name: name}});
    return axios({
      method: method,
      url: endpoint,
      data: reqObject,
      params: {},
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...rest
    }).then(
      res => {
        if (!saveToStore) {
          return dispatch({
            type: `QUERY_FULFILLED_${name}_NO_SAVE`,
            payload: {name}
          })
        }
        return dispatch({
          type: `QUERY_FULFILLED_${name}`,
          payload: {
            data: res.data,
            name: name
          }
        })
      },
      err => (
        dispatch({
          type: `QUERY_REJECTED_${name}`,
          payload: {
            data: err,
            name: name
          }
        })
      )
    );
  }
};
