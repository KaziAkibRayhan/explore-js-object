const speaker = {
    name: 'D7',
    color: 'Black D7',
    price: 400,
    isMobileSupport: true
};
const keys = Object.keys(speaker);
// console.log(keys)
const values = Object.values(speaker);
// console.log(values)
// const pair = Object.entries(speaker);
// console.log(pair)
console.log(speaker);
// Object.seal(speaker);
Object.freeze(speaker);
delete speaker.isMobileSupport;
speaker.price = 2000;
console.log(speaker);

