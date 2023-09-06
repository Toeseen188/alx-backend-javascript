export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  try {
    const ans = numerator / denominator;
    return ans;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
