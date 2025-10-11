import React from 'react'

const axiosinstance = () => {
  const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  return instance;
}

export default axiosinstance