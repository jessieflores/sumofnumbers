
const testNums = [1, 2, 3, 4];

function sumFor(list) {
  let total = 0;
  for(let val of list) {

    total += val;

  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(list) {

  let total = 0;
  let i = 0;

  while(i < list.length) {

    total += list[i];
    i++;

  }
  return total;

}

console.log(sumWhile(testNums));

function sumRecursion(list) {

  if(list.length === 0) {

    return 0;
  }
  else {

    return list[0] + sumRecursion(list.slice(1, list.length));
  }


}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(list) {

  return _.reduce(list, function(val, memo) {return memo + val;});

}

console.log(sumTheSimpleWay(testNums));
