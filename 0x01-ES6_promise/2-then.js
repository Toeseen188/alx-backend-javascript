export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'success',
    };
    if (promise) {
      resolve(obj);
    } else {
      reject(new Error());
    }
    console.log('Got a response from the API');
  });
}
