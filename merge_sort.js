//will write it later on
let mergeSort = function (arr = [], mode = null) {
  if (arr.length == 1) return arr;

  let merge = function (left, right) {
    let sortedarr = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] > right[0] && mode == 1) {
        sortedarr.push(left.shift());
      } else if (right[0] > left[0] && mode == 1) {
        sortedarr.push(right.shift());
      } else if (left[0] < right[0]) {
        sortedarr.push(left.shift());
      } else if (right[0] < left[0]) {
        sortedarr.push(right.shift());
      }else{
        sortedarr.push(right.shift(),left.shift())
      }
    }
    return [...sortedarr, ...left, ...right];
  };

  let halve = Math.floor(arr.length / 2);
  let left = arr.slice(0, halve);
  let right = arr.slice(halve);
  console.log(left, right);

  const res = merge(mergeSort(left, mode), mergeSort(right, mode));

  return res;
};
console.log(mergeSort([5, 8, 6, 7, 9,9,9,9,9, 1, 3, 4],1));
