import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [uploadPhotoResult, createUserResult] = results;
      console.log(uploadPhotoResult.body, createUserResult.firstName, createUserResult.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
