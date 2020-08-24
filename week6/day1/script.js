//chunk
var chunk = function (data, size) {
    var output = [];
    while (data.length >= size) {
        output.push(data.slice(0, size));
        data = data.slice(size, data.length);
    }
    if (data.length > 0) {
        output.push(data);
    }
    return output;
};
var chunkInput = [2, 3, 5, 6, 7, 8, 9];
console.log("input: " + chunkInput + " output of chunk with size 4: " + chunk(chunkInput, 4).join(";"));
//reduce
var reduce = function (data) {
    return data.reduce(function (acc, curr) { return acc + " " + curr + " "; }, "");
};
var reduceInput = ["hi", "hello", "how you"];
console.log("input: " + reduceInput + " output of reduce to concat: " + reduce(reduceInput));
//filter
var filter = function (data) { return data.filter(function (val) { return val % 2 === 0; }); };
console.log("input: " + chunkInput + " output of filter: " + filter(chunkInput));
//find
var find = function (data) { return data.find(function (val) { return val % 2 !== 0; }); };
console.log("input: " + chunkInput + " output of find: " + find(chunkInput));
// sum
var sum = function (data) { return data.reduce(function (acc, curr) { return acc + curr; }, 0); };
console.log("input: " + chunkInput + " output of sum: " + sum(chunkInput));
