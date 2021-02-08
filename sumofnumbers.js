const sampleList = [5, 1, 4, 5, 5];

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
}

console.log(sumFor(sampleList));
console.log(sumWhile(sampleList));
console.log(sumRecursion(sampleList));
console.log(sumTheSimpleWay(sampleList));
