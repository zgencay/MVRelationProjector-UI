// services/ApiServices.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; //burada bir hata mesajı alıyoruz

export const getParsedResults = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching relational model:', error);
        throw error;
    }
};