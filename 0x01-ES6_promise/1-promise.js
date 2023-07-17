export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(obj);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
/*
getFullResponseFromAPI()
  .then(response => {
    console.log('Success:', response);
  })
  .catch(error => {
    console.log('Error:', error);
  });
  */
