export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'My data!';
      if (data) {
        resolve(data);
      } else {
        const error = new Error('error message');
        reject(error);
      }
    }, 100);
  });
}
