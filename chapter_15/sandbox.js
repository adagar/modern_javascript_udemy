class User {
  constructor(email, username) {
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
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    //return something so that you can chain this
    return this;
  }
}

const userOne = new User("nick@nick.com", "nick");
const userTwo = new User("vero@vero.com", "vero");

console.log(userOne);
userOne.logout();
userTwo.login();

userOne
  .incScore()
  .incScore()
  .incScore()
  .incScore();
