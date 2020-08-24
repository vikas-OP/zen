//chunk
let chunk = (data: any[], size: number) => {
  let output = [];
  while (data.length >= size) {
    output.push(data.slice(0, size));
    data = data.slice(size, data.length);
  }
  if (data.length > 0) {
    output.push(data);
  }
  return output;
};
let chunkInput = [2, 3, 5, 6, 7, 8, 9];
console.log(
  `input: ${chunkInput} output of chunk with size 4: ${chunk(
    chunkInput,
    4
  ).join(";")}`
);

//reduce
let reduce = (data: string[]) =>
  data.reduce((acc, curr) => `${acc} ${curr} `, "");
let reduceInput = ["hi", "hello", "how you"];
console.log(
  `input: ${reduceInput} output of reduce to concat: ${reduce(reduceInput)}`
);

//filter
let filter = (data: number[]) => data.filter((val) => val % 2 === 0);
console.log(`input: ${chunkInput} output of filter: ${filter(chunkInput)}`);

//find
let find = (data: number[]) => data.find((val) => val % 2 !== 0);
console.log(`input: ${chunkInput} output of find: ${find(chunkInput)}`);

// sum

let sum = (data: number[]) => data.reduce((acc, curr) => acc + curr, 0);
console.log(`input: ${chunkInput} output of sum: ${sum(chunkInput)}`);
