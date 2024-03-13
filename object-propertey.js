const students = [
    {id:12, name:'omar sunny'},{id:22, name:'mannaaa'},{id:32, name:'jit'},{id:42, name:'dev'},{id:52, name:'dipjol'}
]
// const studenNames = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const {name} = element
//     studenNames.push(name)
// }
// console.log(studenNames);

// we can do this full for loop in just a line below:
const sName = students.map(s => s.name)
const sId = students.map(s => s.id)
const bigger = students.filter(s => s.id > 22)
const {name} = bigger
console.log(sName);
console.log(bigger);


