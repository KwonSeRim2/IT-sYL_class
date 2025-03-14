//ES6부터 clsas개념 도입
class User {
  constructor(first, last) {
    this.firstname = first;
    this.lastname = last;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
