import axios from 'axios';

axios.defaults.baseURL = 'https://phonebook-api-kery.onrender.com/api';

export const fetchContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContactApi = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};

export const deleteContactApi = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export const updateContactApi = async (id, updatedContact) => {
  const response = await axios.put(`/contacts/${id}`, updatedContact);

  return response.data;
};
