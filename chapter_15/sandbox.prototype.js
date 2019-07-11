function User(username, email) {
  this.username = username;
  this.email = email;

  /*this attaches to the instance, NOT to the prototype*/
  /*
  this.login = function() {
    console.log(`${this.username} has logged in`);
  };
  */
}

//this approach attaches the function to the PROTOTYPE, NOT the instance
User.prototype.login = function() {
  console.log(`${this.username} has logged in (prototype method)`);
  return this; //allows for method chaining
};

User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this; //allows for method chaining
};
const userOne = new User("mario", "mario@mario.com");
const userTwo = new User("luigi", "luigi@mario.com");

console.log(userOne, userTwo);
userOne.login().logout();
