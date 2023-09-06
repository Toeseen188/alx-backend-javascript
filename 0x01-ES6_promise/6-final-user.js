// Importing the functions from the respective files
import signUpUser from './4-user-promise';

import uploadPhoto from './5-photo-reject';

// Function to handle profile signup
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  try {
    const [signUpResult, uploadResult] = await Promise.allSettled([
      signUpPromise,
      uploadPhotoPromise,
    ]);

    const resultArray = [
      {
        status: signUpResult.status,
        value: signUpResult.status === 'fulfilled' ? signUpResult.value : signUpResult.reason,
      },
      {
        status: uploadResult.status,
        value: uploadResult.status === 'fulfilled' ? uploadResult.value : uploadResult.reason,
      },
    ];

    return resultArray;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
