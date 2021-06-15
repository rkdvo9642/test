//const fs = require('fs');


console.log('시작');

//비동기
// fs.readFile('./readme2.txt', (err, data) => {
//     if(err) { throw err; }
//     console.log('1번', data.toString());
// })
// fs.readFile('./readme2.txt', (err, data) => {
//     if(err) { throw err; }
//     console.log('2번', data.toString());
// })
// fs.readFile('./readme2.txt', (err, data) => {
//     if(err) { throw err; }
//     console.log('3번', data.toString());
// })

// 동기
// let data = fs.readFileSync('./readme2.txt');
// console.log('1번', data.toString());
// data = fs.readFileSync('./readme2.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readme2.txt');
// console.log('3번', data.toString());

// 콜백지옥
// fs.readFile('./readme2.txt', (err, data) => {
//     if(err) { throw err; }
//     console.log('1번', data.toString());
//     fs.readFile('./readme2.txt', (err, data) => {
//         if(err) { throw err; }
//         console.log('2번', data.toString());
//         fs.readFile('./readme2.txt', (err, data) => {
//             if(err) { throw err; }
//             console.log('3번', data.toString());
//         })
//     })
// })

// Promise
const fs = require('fs').promises
fs.readFile('./readme2.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        return fs.readFile('./readme2.txt');
    })
    .catch((err) => {
        console.error(err);
    })
console.log("끝");
