const API = 'http://localhost:8080';
export default {
  login: `${API}/auth/instagram?provider=instagram`,
  logout: `${API}/auth/logout`,
  selfEventList: `${API}/api/users/self/events`,
  getToken: `${API}/token/callback`,
  events: `${API}/api/events`,
  userContacts: (uuid) => `${API}/api/users/${uuid}/contacts`
}