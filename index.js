const hello = "Hello World"

setTimeout(() => {
  console.log("timeout");}, 0);
setImmediate(() => {
  console.log("immediate"); });

console.log(hello);

