const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'hyeokhyeokhyeokhyeokhyeokhyeokhy';
const iv = '0328032803280328';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("가나다라마바사아자차카타파하", 'utf8', 'base64');
result += cipher.final('base64');

console.log('암호화 : ', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');

result2 += decipher.final('utf8');
console.log('복호화 : ', result2);