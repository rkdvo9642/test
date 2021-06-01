const fs = require('fs').promises;

const str = '글이 입력됩니다.';

fs.writeFile('./writeme.txt', str)
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    })