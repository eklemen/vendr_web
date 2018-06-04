import Query from '../shared/Query';
import api from './apiEndpoints';

export function getMyEventsList() {
  const endpoint = api.selfEventList;
  return Query({
    endpoint,
    name: 'MyEventsList'
  });
}

export function getToken() {
  const endpoint = api.getToken;
  return Query({
    endpoint,
    name: 'User'
  })
}