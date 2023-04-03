import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

export const fetchCategories = async (query) => await api.get(`/api/categories?${query}`);
export const fetchArticles = async (query) => await api.get(`/api/articles?${query}`);
export const fetchCarrers = async (query) => await api.get(`/api/careers?${query}`);
export const fetchTechnologies = async (query) => await api.get(`/api/technologies?${query}`);
export const fetchLifestyles = async (query) => await api.get(`/api/lifestyles?${query}`);
export const fetchFinances = async (query) => await api.get(`/api/finances?${query}`);






