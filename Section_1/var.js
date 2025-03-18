// 1. restrict "var"
// const name;

// name = '이름';
// console.log(name); // 이름 출력
// name = '이름2';
// console.log(name); // 이름2 출력
// name = '이름3';
// console.log(name); // 이름3 출력

// 2. Scope
let global = '전역';

if (global === '전역') {
  global = '지역';

}

console.log(global);

const person = [{
  name: 'jang',
  age: '30',
}];

person.push({
  name: 'lee',
  age: '22',
});

console.log(person);