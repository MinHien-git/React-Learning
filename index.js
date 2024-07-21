const crypto = require("crypto");
let a = {};

console.log(a.b);
console.log(a["c"]);
let uuid = crypto.randomUUID();
console.log(uuid);

a[uuid] = { value: "This is a new key" };

let uuid2 = crypto.randomUUID();

a[uuid2] = "This is a new key 2";

console.log(a);

console.log("Values", Object.values(a));

delete a[uuid2];
a[uuid] = { value: "This is a update key" };
console.log("NEw a", a);
