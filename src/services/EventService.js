import Query from '../shared/Query';
import api from './apiEndpoints';

export function getEventDetails(uuid) {
  const endpoint = `${api.events}/${uuid}`;
  return Query({
    endpoint,
    name: 'EventDetails'
  });
}