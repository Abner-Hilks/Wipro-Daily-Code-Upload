export const fakeFetch = (data, delay = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));
