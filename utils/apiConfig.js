const { NODE_ENV: ENV } = process.env;
export const API_URL = ENV === 'production' ? 'https://rizkipurba.id/api' : 'http://localhost:3001';