export default function appendToEachArrayValue(array, appendString) {
  const array1 = [];
  for (let mem of array) {
    mem = appendString + mem;
    array1.push(mem);
  }

  return array1;
}
