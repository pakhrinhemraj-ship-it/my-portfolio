import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  submit: async (data: { name: string; email: string; message: string }) => {
    try {
      const response = await api.post('/contact', data);
      return { success: true, data: response.data };
    } catch (error: unknown) {
      return {
        success: false,
        error: axios.isAxiosError(error)
          ? (error.response?.data?.message as string)
          : 'Failed to send message',
      };
    }
  },
};

export const projectsService = {
  getAll: async () => {
    try {
      const response = await api.get('/projects');
      return { success: true, data: response.data.data || [] };
    } catch (error: unknown) {
      return {
        success: false,
        data: [],
        error: axios.isAxiosError(error)
          ? (error.response?.data?.message as string)
          : 'Failed to fetch projects',
      };
    }
  },

  getFeatured: async () => {
    try {
      const response = await api.get('/projects?featured=true');
      return { success: true, data: response.data.data || [] };
    } catch (error: unknown) {
      return {
        success: false,
        data: [],
        error: axios.isAxiosError(error)
          ? (error.response?.data?.message as string)
          : 'Failed to fetch projects',
      };
    }
  },
};

export default api;
