function nYear(p0, parcentage, outside, p) {
  let population = p0 + (p0 * parcentage) / 100 + outside;
  let count = 1;
  while (true) {
    if (population <= p) {
      population = population + (population * parcentage) / 100 + outside;
      count++;
    } else {
      break;
    }
  }
  return count;
}
const result = nYear(1500000, 2.5, 10000, 2000000);
console.log(result);
