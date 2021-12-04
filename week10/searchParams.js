const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);   //암호화 알고리즘과 키, 초기화 벡터를 넣어준다.
let result = cipher.update('암호화할 문장', 'utf8', 'base64');  //update 뒤에 암호화 할 문장과, 대상의 인코딩, 출력결과물의 인코딩을 넣어준다.
result += cipher.final('base64');   //암호화 된 문장을 인코딩을 사용하여 result에 저장해준다.
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);   //복호화 알고리즘과 키, 초기화 벡터를 넣어준다.
let result2 = decipher.update(result, 'base64', 'utf8');    //복호화 할 문장과, 암호화의 인코딩, 문장의 인코딩을 넣어준다.
result2 += decipher.final('utf8');  //복호화 결과물의 인코딩을 넣어준다. 
console.log('복호화:', result2);