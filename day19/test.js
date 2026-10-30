const prices = [12000, 8000, 15000, 5000];

const expensive = prices.filter((price) => price >= 10000);
const discounted = expensive.map((price) => price - 1000);
const total = discounted.reduce((sum, price) => sum + price, 0);

console.log(expensive.length);
console.log(discounted[0]);
console.log(total);

function makeAdder(n) {
  return (x) => x + n;
}
const add1000 = makeAdder(1000);
console.log(add1000(500));
console.log(prices.map(makeAdder(1))[3]);

prices.map((n) => {
  return (x) => x + n;
});
