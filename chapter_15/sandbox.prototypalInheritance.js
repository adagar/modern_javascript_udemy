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

//inheritance using prototypes
function Admin(username, email, title) {
  //super won't work with this "un-sugared" method
  User.call(this, username, email); //how you do inheritance with prototypes
  this.title = title;
}

//inherit all those functions we put in user object
Admin.prototype = Object.create(User.prototype); //creates a new object

//create method JUSt for the child object
Admin.prototype.deleteUser = function() {
  //delete a user
};
const userOne = new User("mario", "mario@mario.com");
const userTwo = new User("luigi", "luigi@mario.com");
const userThree = new Admin("Nick", "nick@mario.com", "black-belt ninja");

console.log(userOne, userTwo, userThree);
userOne.login().logout();
