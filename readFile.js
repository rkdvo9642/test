const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err){ throw err; } // 에러가 났을때.
    console.log(data); // readFile의 결과물은 버퍼 형식으로 제공.
    console.log(data.toString()); // toString을 사용하여 가공한다.
})