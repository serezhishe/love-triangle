/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    n = preferences[i] - 1;
    if (n != i) {
      for (let j = 0; j < 2; j++) {
        n = preferences[n] - 1;
      }
   if (n == i) count++;  
    }
  }
  return count/3;
};
