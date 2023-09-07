import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [uploadValue, createValue] = await Promise.all([uploadPhoto(), createUser()]);

  try {
    const obj = {
      photo: uploadValue,
      user: createValue,
    };
    return obj;
  } catch (error) {
    console.error(error);
    const obj = {
      photo: null,
      user: null,
    };
    return obj;
  }
}
