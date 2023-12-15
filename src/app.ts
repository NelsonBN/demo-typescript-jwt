import { sign, verify } from 'jsonwebtoken';

const secretKey = 'J74+9avShlI3HpeixqTxh3EvSdtGtxoJW/4WjLYBwFE=';
const issuer = 'yourIssuer';
const audience = 'yourAudience';

const userId = 123456;

const payload = {
    name: 'John Doe',
    email: 'fake@email.fk',
    roles: ['admin', 'user'], // User roles
    permissions: ['read:data', 'write:data']
};

const token = sign(payload, secretKey, {
    algorithm: 'HS512', // HMAC SHA-512 algorithm
    expiresIn: '5m', // Token expires in 1 hour
    notBefore: 0, // Token is not valid before 0 seconds
    issuer: issuer,
    audience: audience,
    subject: userId.toString(),
    header: {
        typ: 'at+jwt'
    }
});

console.log(token);

console.log(`At time ${Math.floor(Date.now() / 1000)}`);
console.log("Token is", verify(token, secretKey));