import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

export const fetchCategories = async (query) => await api.get(`/api/categories?${query}`);
export const fetchArticles = async (query) => await api.get(`/api/articles?${query}`);

