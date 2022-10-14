const speaker = {
    name: 'D7',
    color: 'Black D7',
    price: 400,
    isMobileSupport: true
};

/* const keys = Object.keys(speaker);
for (const key of keys) {
    console.log(key, speaker[key]);
} */

// for in loop

for (const key in speaker) {
    const value = speaker[key];
    // console.log(key, value);
}

// entries 

for (const [key, value] of Object.entries(speaker)) {
    console.log(key, value);
}
