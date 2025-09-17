import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL + '/expenses';

export const getExpenses = () => axios.get(BASE_URL);
export const addExpense = (data) => axios.post(BASE_URL, data);
export const deleteExpense = (id) => axios.delete(`${BASE_URL}/${id}`);