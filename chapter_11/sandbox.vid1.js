const now = new Date();

console.log(now);
console.log(typeof now);

console.log("Get full year:", now.getFullYear());
console.log("Get full month:", now.getMonth());
console.log("Get full date:", now.getDate());
console.log("Get full day:", now.getDay());
console.log("Get full Hour:", now.getHours());
console.log("Get full Minute:", now.getMinutes());
console.log("Get full Second:", now.getSeconds());

//timestamps
console.log("Timestamp:", now.getTime());

//date strings
console.log("Datestring:", now.toDateString());
console.log("Time string:", now.toTimeString());
console.log("Local String:", now.toLocaleString());
