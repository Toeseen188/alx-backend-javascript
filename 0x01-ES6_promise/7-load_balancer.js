export default function loadBalancer(chinaDownload, USDownload) {
  const firstResolve = Promise.race([chinaDownload, USDownload]);
  try {
    return firstResolve;
  } catch (error) {
    console.log('Error occurred');
    throw error;
  }
}
