class User {
  constructor(username, email) {
    //setup properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    //return something so that you can chain this
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter(u => u.username !== user.username);
  }
}

const userOne = new User("mario", "mario@mario.com");
const userTwo = new User("Luigi", "luigio@mario.com");
const userThree = new Admin("Nick", "nick@nick.com", "blackbelt");

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
