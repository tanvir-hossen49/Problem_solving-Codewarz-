//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//example
/*
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

function listFilter(arr) {
  let newArr = [];
  for (let i of arr) {
    if (typeof i === "number") {
      newArr.push(i);
    }
  }
  return newArr;
}
const result = listFilter([1, 2, "a", "b"]);
console.log(result);
