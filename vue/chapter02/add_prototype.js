const Serim = {
  firstname: serim,
  lastname: kwon,
  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

//일반함수에서 this는 호출하는 객체
console.log(Serim.getFullname());

//생성자 함수
function User(first, last) {
  tjis.firstname = first;
  this.lastname = last;
}
//프롤토타입에 추가된 함수는 객체 전체가 공유
User.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};
const serim = new User('serim', 'kwon');
