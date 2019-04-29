const before = new Date("Feburary 1 2019 7:30:59");
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
console.log(mins);
console.log(mins / 60);
console.log(Math.round(mins / (60 * 24)));

//convert timestamp to date obj
const 
